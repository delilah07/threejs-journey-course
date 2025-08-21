import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
// renderer.render(scene, camera)

// // Animation

// the first method to adapted animation to the frame
// let time = Date.now() 
// const tick = () => {
//     // console.log(tick)

//     // Time
//     const currentTime = Date.now()
//     const deltaTime = currentTime - time
//     time = currentTime
//     // console.log(deltaTime)

//     // Update object
//     // mesh.position.x += 0.01
//     mesh.rotation.x += 0.001 * deltaTime

//     // Render
//     renderer.render(scene, camera)

//     window.requestAnimationFrame(tick)
// }

// the second method to adapted animation to the frame
// const clock = new THREE.Clock()
// const tick = () => {
//     // Time
//    const elapsedTime = clock.getElapsedTime()
// //    console.log(elapsedTime)

//     // Update object
//     // mesh.rotation.x = elapsedTime
//     // mesh.rotation.x = elapsedTime * Math.PI * 2 // one hull rotation per second
    
//     // mesh.position.y = Math.sin(elapsedTime) //bounsing animation
//     // mesh.position.x = Math.cos(elapsedTime) //y and x give movement by the circle
    
//     camera.position.y = Math.sin(elapsedTime)
//     camera.position.x = Math.cos(elapsedTime)
//     camera.lookAt(mesh. position)

//     // Render
//     renderer.render(scene, camera)

//     window.requestAnimationFrame(tick)
// }

// the third method to adapted animation to the frame
gsap.to(mesh.position, {duration: 1, x: 2, delay: 2})
const tick = () => {
    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}
tick()