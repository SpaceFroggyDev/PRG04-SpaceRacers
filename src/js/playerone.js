import { Actor, Vector, Input, Keys, CollisionType, BoundingBox } from "excalibur";
import { Resources } from "./resources.js";
import { Finish } from "./finish.js";
import { WayPoint } from "./waypoint.js";

let hitPointsChecked = 0;

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

    // direction / vel fix
    let direction = new Vector(
      Math.cos(this.rotation) * speed,
      Math.sin(this.rotation) * speed
    );

    this.vel = direction;
  }

  hitSomething(event){

        if (event.other instanceof Finish) {
            if (hitPointsChecked > 4) {
              this.scene.finishScene()
              this.scene.engine.p1wins = true
              hitPointsChecked = 0
            }
        }
        if (event.other instanceof WayPoint) {
            hitPointsChecked++;
        }
      }
  
}