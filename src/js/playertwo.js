import { Actor, Vector, Input, Keys, clamp, CollisionType } from "excalibur";
import { Resources } from "./resources.js";
import { Finish } from "./finish.js";
import { WayPoint } from "./waypoint.js";

let hitPointsChecked = 0;

export class PlayerTwo extends Actor {
  constructor() {
    super({
      width: Resources.PlayerTwo.width,
      height: Resources.PlayerTwo.height,
    });
    this.body.collisionType = CollisionType.Active;
  }
  onInitialize(engine) {
    this.graphics.use(Resources.PlayerTwo.toSprite());
    this.rotation = 1.6;
    this.on('collisionstart', (event) => this.hitSomething(event))
  }

  onPreUpdate(engine) {
    let speed = 0;

    if (engine.input.keyboard.isHeld(Keys.Down)) {
      speed = 150;
    }

    if (engine.input.keyboard.isHeld(Keys.Up)) {
      speed = -150;
    }

    if (engine.input.keyboard.isHeld(Keys.Right)) {
      this.rotation += 0.05;
    }
    if (engine.input.keyboard.isHeld(Keys.Left)) {
      this.rotation -= 0.05;
    }

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
              this.scene.engine.p2wins = true
              hitPointsChecked = 0
            }
        }
        if (event.other instanceof WayPoint) {
            hitPointsChecked++;
        }
      }
}