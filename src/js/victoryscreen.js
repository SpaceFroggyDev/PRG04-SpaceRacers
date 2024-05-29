import { Actor, Engine, Vector, DisplayMode, Input, Keys, Scene, Camera, Label, Font, FontUnit, Color} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { UI } from './ui.js'

export class VictoryScreen extends Scene {
    onInitialize(engine) {
        const victoryscreenimg = new Actor()
        this.add(victoryscreenimg)
        victoryscreenimg.graphics.use(Resources.VictoryScreenImg.toSprite())
        victoryscreenimg.pos =  new Vector(200,112.5)
    }
    onActivate(ctx) {
        console.log(this.ui.timeScore)
        let finalScore = new Label({
        text:`Your score is 0${this.ui.timeScore}`,
        pos: new Vector(125, 150),
        font: Resources.PixelFont.toFont({
        unit: FontUnit.Px,
        size: 10,
        color: Color.White
            })
        })

        this.add(finalScore)
    }
    onPreUpdate(engine){
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.engine.goToScene('titlescreen')
        }
    }
}