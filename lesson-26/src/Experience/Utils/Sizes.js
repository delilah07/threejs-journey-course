import EventEmitter from "./EventEmiter.js"

export default class Sizes extends EventEmitter {
    constructor() {
        super()

        // Setup
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRation = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener('resize', () =>
            {
                // Update sizes
                this.width = window.innerWidth
                this.height = window.innerHeight
                this.pixelRation = Math.min(window.devicePixelRatio, 2)

                this.trigger('resize')
            })
        }
}