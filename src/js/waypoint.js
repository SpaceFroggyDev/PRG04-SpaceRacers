import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

export class WayPoint extends Actor {

    constructor() {
        super({ 
            width: 60,
            height: 60,
         });
         this.body.collisionType = CollisionType.Passive;
        }
}