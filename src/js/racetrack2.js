import { Actor, Vector } from "excalibur"
import { Resources } from './resources'

export class RaceTrack2 extends Actor {

    constructor() {
        super({ 
            width: 2000,
            height: 1500
         })
        }
    onInitialize(engine) {
        this.graphics.use(Resources.RaceTrack2.toSprite())
        this.pos = new Vector(100, 100)
    }
}