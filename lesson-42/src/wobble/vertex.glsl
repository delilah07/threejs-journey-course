// varying vec2 vUv;

#include ../shaders/includes/simplexNoise4d.glsl

attribute vec4 tangent;

float getWobble(vec3 position){
    return simplexNoise4d(vec4(position, 0.0));
}

void main(){
    // // csm_Position.y += 2.0;   

    // // Varying UV coordinates
    // vUv = uv;

    vec3 biTangent = cross(normal, tangent.xyz);

    // Neighborhood position
    float shift = 0.01;
    vec3 positionA = csm_Position + tangent.xyz * shift;
    vec3 positionB = csm_Position + biTangent * shift;

    float wobble = getWobble(csm_Position);
    csm_Position += wobble * normal;
   
    positionA += getWobble(positionA) * normal;
    positionB += getWobble(positionB) * normal;

    // Compute normal
    vec3 toA = normalize(positionA - csm_Position);
    vec3 toB = normalize(positionB - csm_Position);
    csm_Normal = cross(toA, toB);
}