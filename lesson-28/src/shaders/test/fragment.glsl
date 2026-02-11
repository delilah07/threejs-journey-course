varying vec2 vUv;

void main()
{
    // // Pattern 1
    // gl_FragColor = vec4(vUv.x, vUv.y, 0.8, 1.0);

    // // Pattern 2
    // gl_FragColor = vec4(vUv, 0.5, 1.0);

    // // Pattern 3
    // float strength = vUv.x;
    // gl_FragColor = vec4(strength, strength, strength, 1.0);
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 4
    // float strength = vUv.y;
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 5
    // float strength = 1.0 - vUv.y;
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 6
    // float strength = 10.0 * vUv.y;
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 7
    // float strength = mod(10.0 * vUv.y, 1.0);
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 8
    // float strength = mod(10.0 * vUv.y, 1.0);
    // // if(strength > 0.5) {strength = 1.0;} // avoid it
    // // else {strength = 0.0;}'
    // // if(strength > 0.5) strength = 1.0; // avoid it
    // // else strength = 0.0;
    // // strength = strength > 0.5 ? 1.0 : 0.0; // avoid it
    // strength = step(0.5, strength);
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 10
    // float strength = mod(10.0 * vUv.x, 1.0);
    // strength = step(0.8, strength);
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 11
    // float strength = step(0.8, mod(10.0 * vUv.x, 1.0));
    // strength += step(0.8, mod(10.0 * vUv.y, 1.0));
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 12
    // float strength = step(0.8, mod(10.0 * vUv.x, 1.0));
    // strength *= step(0.8, mod(10.0 * vUv.y, 1.0));
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 13
    // // float strength = step(0.8, mod(10.0 * vUv.y, 1.0));
    // // strength -= step(0.6, mod(10.0 * vUv.x, 1.0));
    // float strength = step(0.4, mod(10.0 * vUv.x, 1.0));
    // strength *= step(0.8, mod(10.0 * vUv.y, 1.0));
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 14
    // float barX = step(0.4, mod(10.0 * vUv.x, 1.0));
    // barX *= step(0.8, mod(10.0 * vUv.y, 1.0));
    // float barY = step(0.8, mod(10.0 * vUv.x, 1.0));
    // barY *= step(0.4, mod(10.0 * vUv.y, 1.0));
    // float strength = barX + barY;
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 15
    // float barX = step(0.4, mod(10.0 * vUv.x - 0.2, 1.0));
    // barX *= step(0.8, mod(10.0 * vUv.y, 1.0));
    // float barY = step(0.8, mod(10.0 * vUv.x, 1.0));
    // barY *= step(0.4, mod(10.0 * vUv.y - 0.2, 1.0));
    // float strength = barX + barY;
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 16
    // float strength = abs(vUv.x - 0.5);
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 17
    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 18
    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // Pattern 19
    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
    // strength = step(0.2, strength);
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Pattern 20
    float square1 = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    float square2 = 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    float strength = square1 * square2;
    gl_FragColor = vec4(vec3(strength), 1.0);
}