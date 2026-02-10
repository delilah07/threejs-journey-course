uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform vec2 uFrequency;
uniform float uTime;

attribute vec3 position;

attribute vec2 uv;
varying vec2 vUv;
varying float vElevation;

// attribute float aRandom;

// varying float vRandom;

// // float loremIpsum(){
// //     float a = 1.23;
// //     float b = 2.23;
// //     return a + b;
// // }

// float add(float a, float b){
//     return a + b;
// }


// void main(){
//     // float fooBar = 1.23;

//     // float a = 1.23;
//     // float b = 2.23;
//     // float c = a + b;
    
//     // int foo = 2;

//     // float a = 1.23;
//     // int b = 2;
//     // float c = a + float(b);

//     // bool foo = true;
//     // bool bar = false;

//     // vec2 foo = vec2(1.0, 0.1);
//     // vec2 foo1 = vec2(0.0);
//     // foo1.x = 1.0;
//     // foo1.y = 0.1;
//     // foo *= 2.0;

//     // vec3 foo = vec3(1.0, 0.1, 1.1);
//     // vec3 foo1 = vec3(0.0);
//     // foo1.x = 1.0;
//     // foo1.y = 0.1;
//     // foo1.z = 1.1;
//     // foo *= 2.0;
//     // vec3 purleColor = vec3(0.0);
//     // purleColor.r = 0.5;
//     // purleColor.b = 1.0;

//     // vec2 foo = vec2(1.0, 2.0);
//     // vec3 bar = vec3(foo, 3.0);

//     // vec3 foo = vec3(1.0, 2.0, 3.0);
//     // vec2 bar = foo.xy;
//     // vec2 bar1 = foo.xz;
//     // vec2 bar2 = foo.zx;

//     // vec4 foo = vec4(1.0, 2.0, 3.0, 4.0);
//     // vec4 bar = vec4(foo.zw, vec2(5.0, 6.0));

//     // float result = loremIpsum();
//     // float result = add(1.0, 2.0);

//     vec4 modelPosition = modelMatrix * vec4(position, 1.0);
//     // modelPosition.y += 1.0;
//     // modelPosition.z += sin(modelPosition.x * 10.0) * 0.1;
//     modelPosition.z += aRandom * 0.1;
//     vec4 viewPosition = viewMatrix * modelPosition;
//     vec4 projectionPosition =  projectionMatrix * viewPosition;
//     gl_Position = projectionPosition;

//     // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);

//     // gl_Position.x += 0.5;
//     // gl_Position.y += 0.3;

//     vRandom = aRandom;

// }

void main(){
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    // modelPosition.z += sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
    // modelPosition.z += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;

    float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
    elevation += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;
    
    modelPosition.z += elevation;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vUv = uv;
    vElevation = elevation;
}