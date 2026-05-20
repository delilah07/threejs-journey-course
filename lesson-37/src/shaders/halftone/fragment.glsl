uniform vec3 uColor;
uniform vec2 uResolution;
uniform float uShadowRepetitions;
uniform vec3 uShadowColor;
uniform float uLightRepetitions;
uniform vec3 uLightColor;

varying vec3 vNormal;
varying vec3 vPosition;

#include ../includes/ambientLight.glsl
#include ../includes/directionalLight.glsl
#include ../includes/pointLight.glsl

vec3 halfToneFunction(
    vec3 color,
    float repetitions,
    vec3 direction,
    float low,
    float high,
    vec3 pointColor,
    vec3 normal
){
    float intensity = dot(normal, direction); // how much the grid is visible
    intensity = smoothstep(low, high, intensity); // smooth the transition between low and high

    vec2 uv = gl_FragCoord.xy / uResolution.y;
    uv *= repetitions; 
    uv = mod(uv, 1.0);

    // Discs
    float point = distance(uv, vec2(0.5));
    point = 1.0 - step(0.5 * intensity, point); // step(edge, x) returns 0.0 if x < edge, and 1.0 otherwise.

    color = mix(color, pointColor, point); 
    return color;
}

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = uColor;

    // Lights
    vec3 light = vec3(0.0);
    light += ambientLight(
        vec3(1.0),  //Light color
        1.0         //Light intensity
    );

    light += directionalLight(
        vec3(1.0),          //Light color
        1.0,                //Light intensity
        normal,             //Normal
        vec3(1.0, 1.0, 0.0), //Light position
        viewDirection,      //Veiw direction 
        1.0                 //Specular power -shininess
    );
    
    color *= light;

    // Halftone
    float shadowRepetitions = uShadowRepetitions; // how many sells we want
    float lightRepetitions = uLightRepetitions; // how many sells we want

    vec3 shadowDirection = vec3(0.0, - 1.0, 0.0); // direction of the grid
    vec3 lightDirection = vec3(1.0, 1.0, 0.0); // direction of the grid

    float shadowLow = -0.8; // how much the grid is visible when the normal is facing the opposite direction;
    float lightLow = 0.5; // how much the grid is visible when the normal is facing the opposite direction;
    float shadowHigh = 1.5; // how much the grid is visible when the normal is facing the direction;
    float lightHigh = 1.3; // how much the grid is visible when the normal is facing the direction;

    vec3 shadowPointColor = uShadowColor; // color of the grid points
    vec3 lightPointColor = uLightColor; // color of the grid points

    color = halfToneFunction(color, shadowRepetitions, shadowDirection, shadowLow, shadowHigh, shadowPointColor, normal);
    color += halfToneFunction(color, lightRepetitions, lightDirection, lightLow, lightHigh, lightPointColor, normal);

    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}