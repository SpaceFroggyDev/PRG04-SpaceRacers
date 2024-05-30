import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

export class Finish extends Actor {

    constructor() {
        super({ 
            width: 62,
            height: 10,
         });
         this.body.collisionType = CollisionType.Passive;
        }
    onInitialize(engine) {
        this.pos = new Vector(-555 , 118)
    }
}