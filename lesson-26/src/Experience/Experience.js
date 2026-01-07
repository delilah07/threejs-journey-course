import * as THREE from "three"
import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import World from "./World/World.js";

let instance = null

export default class Experience {
    constructor(canvas) {
        if(instance) return instance;

        instance = this;

        // Global access
        window.experience = this;

        // Options
        this.canvas = canvas

        // Setup
        this.sizes = new Sizes()
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        // Sizes resize events
        this.sizes.on('resize', () => this.resize())

        // Time tick event
        this.time.on('tick', () => this.update())

            // Test mesh
                const testMesh = new THREE.Mesh(
                    new THREE.BoxGeometry(1, 1, 1),
                    new THREE.MeshBasicMaterial({wireframe:true})
                )
                this.scene.add(testMesh)
    }

    resize(){
        this.camera.resize()
        this.renderer.resize()
    }
    
    update(){
        this.camera.update()
        this.renderer.update()

    }
}