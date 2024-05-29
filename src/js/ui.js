import { Actor, Engine, Vector, DisplayMode, Input, Keys, Scene, Camera, Timer, Label, Font, FontUnit, Color, ScreenElement} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
export class UI extends ScreenElement {

      scoreText
      timeScore = 999

    onInitialize(engine) {
        this.scoreText = new Label({
            text: `Score: ${this.timeScore}`,
            pos: new Vector(10, 10),
             font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 10,
                color: Color.fromHex('#fff7e4')
            })
        })
        this.addChild(this.scoreText)
        }
    }