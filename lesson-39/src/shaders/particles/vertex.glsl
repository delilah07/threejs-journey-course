uniform vec2 uResolution;
uniform sampler2D uPictureTexture;

varying vec3 vColor;

void main()
{
    // Final position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
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