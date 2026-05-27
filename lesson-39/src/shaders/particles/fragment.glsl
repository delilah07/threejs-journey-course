varying vec3 vColor;

void main()
{
    vec2 uv = gl_PointCoord;
    float distanceToCenter = distance(uv, vec2(0.5)); // length(uv - vec2(0.5)); the same as distance(uv, vec2(0.5))
    if (distanceToCenter > 0.5) discard; // not render the fragment if it's outside the circle, the visual the same as alpha, but it doesn't render at all, so it's more performant

    gl_FragColor = vec4(vColor, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}