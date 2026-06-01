uniform vec2 uResolution;
uniform sampler2D uPictureTexture;
uniform sampler2D uDisplacementTexture;

varying vec3 vColor;

attribute float aIntensity;
attribute float aAngle;

void main()
{
    //Displacement
    vec3 newPosition = position;
    float displacementIntensity = texture(uDisplacementTexture, uv).r; // get the red channel of the texture, because it's a black and white texture, so all channels are the same, we can just use one of them
    displacementIntensity = smoothstep(0.1, 0.3, displacementIntensity); // make the displacement more smooth
    vec3 displacement = vec3(cos(aAngle) * 0.2, sin(aAngle) * 0.2, 1.0);
    displacement = normalize(displacement);
    displacement *= displacementIntensity;
    displacement *= 3.0;
    displacement *= aIntensity;
    newPosition += displacement;

    // Final position
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    // Picture
    float pictureIntensity = texture2D(uPictureTexture, uv).r; // get the red channel of the texture, because it's a black and white texture, so all channels are the same, we can just use one of them
   

    // Point size
    gl_PointSize = 0.15 * pictureIntensity * uResolution.y;
    gl_PointSize *= (1.0 / - viewPosition.z);

    // Varying
    vColor = vec3(pow(pictureIntensity, 2.0));
}