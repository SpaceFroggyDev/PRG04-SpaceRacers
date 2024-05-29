import { Actor, Vector, Input, Keys, CollisionType, BoundingBox } from "excalibur";
import { Resources } from "./resources.js";
import { Finish } from "./finish.js";
import { WayPoint } from "./waypoint.js";

let hitPointsChecked = 0;
let finished = false;

export class PlayerOne extends Actor {
  constructor() {
    super({
      width: Resources.PlayerOne.width,
      height: Resources.PlayerOne.height,
    });
    this.body.collisionType = CollisionType.Active;
  }
  onInitialize(engine) {
    this.graphics.use(Resources.PlayerOne.toSprite());
    this.pos = new Vector(-570, 140);
    this.rotation = 1.6;
    this.scene.camera.strategy.lockToActor(this)
    this.on('collisionstart', (event) => this.hitSomething(event))
  }

  onPreUpdate(engine) {
    let speed = 0;

    // backward
    if (engine.input.keyboard.isHeld(Keys.S)) {
      speed = 150;
    }

    // forward
    if (engine.input.keyboard.isHeld(Keys.W)) {
      speed = -150;
    }

    // left and right
    if (engine.input.keyboard.isHeld(Keys.D)) {
      this.rotation += 0.05;
    }
    if (engine.input.keyboard.isHeld(Keys.A)) {
      this.rotation -= 0.05;
    }

    // direction is the cosine/sine of the angle!
    let direction = new Vector(
      Math.cos(this.rotation) * speed,
      Math.sin(this.rotation) * speed
    );

    this.vel = direction;
  }

  onPostUpdate(){
    // console.log(`x: ${this.pos.x}, y: ${this.pos.y}`)
    // console.log(this.rotation)
  }

  hitSomething(event){

        if (event.other instanceof Finish) {
            if ((hitPointsChecked > 4) && (finished === false)) {
              console.log("finished!")
              console.log(this.scene)
              finished = true
              this.scene.finishScene()
            }
        }
        if (event.other instanceof WayPoint) {
            hitPointsChecked++;
            console.log(hitPointsChecked)
        }
      }
  
}