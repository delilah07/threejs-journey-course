varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

uniform sampler2D uDayTexture;
uniform sampler2D uNightTexture;
uniform sampler2D uSpecularCloudsTexture;
uniform float uSpecularCloudsNumber;
uniform vec3 uSunDirection;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereTwilightColor;

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = vec3(0.0);

    // Sun direction
    float sunOrientation = dot(uSunDirection, normal);
    // color = vec3(sunOrientation);

    // Day and night
    float dayMix = smoothstep(-0.25, 0.5, sunOrientation);
    vec3 dayColor = texture2D(uDayTexture, vUv).rgb;
    vec3 nightColor = texture2D(uNightTexture, vUv).rgb;
    color = mix(nightColor, dayColor, dayMix);

    // Specular clouds color
    vec2 specularCloudsColor = texture(uSpecularCloudsTexture, vUv).rg;
    
    // Clouds
    float cloudsMix = smoothstep(uSpecularCloudsNumber, 1.0, specularCloudsColor.g);
    cloudsMix *= dayMix; // Only show clouds on the day side
    color = mix(color, vec3(1.0), cloudsMix);

    // Fresnel effect
    float fresnel = dot(viewDirection, normal) + 1.0;
    fresnel = pow(fresnel, 2.0);

    // Atmosphere
    float atmosphereDayMix = smoothstep(-0.5, 0.25, sunOrientation);  
    vec3 atmosphereColor = mix(uAtmosphereTwilightColor, uAtmosphereDayColor, atmosphereDayMix);

    color = mix(color, atmosphereColor, fresnel * atmosphereDayMix);

    // Specular of sun
    vec3 reflection = reflect(-uSunDirection, normal);
    float specular = - dot(reflection, viewDirection);
    specular = max(specular, 0.0);
    specular = pow(specular, 32.0);
    specular *= specularCloudsColor.r; // Only show specular where there are clouds

    vec3 specularColor = mix(vec3(1.0), atmosphereColor, fresnel);
    color += specularColor * specular;

    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}