import * as THREE from "three"
import Experience from "../Experience.js";

export default class World {
    constructor(){
        this.experience = new Experience()
        
        this.scene = this.experience.scene

        this.newMesh()
    }
    newMesh(){
        // Test mesh
        console.log('start')
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ wireframe: true })
        )
        console.log(testMesh)
        this.scene.add(testMesh)
        console.log(this.scene)
    }
}