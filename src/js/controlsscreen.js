import { Actor, Engine, Vector, DisplayMode, Input, Keys, Scene, Camera} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Level } from './level.js'

export class ControlsScreen extends Scene {
    onInitialize(engine) {
        const controlsscreenimg = new Actor()
        this.add(controlsscreenimg)
        controlsscreenimg.graphics.use(Resources.ControlsScreen.toSprite())
        controlsscreenimg.pos =  new Vector(200,112.5)
    }
    onActivate(ctx) {
       Resources.ControlsMusic.play(0.5)
    }
    onPreUpdate(engine){
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.engine.goToScene('level')
            Resources.ControlsMusic.stop()
        }

        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            this.engine.goToScene('titlescreen')
            Resources.ControlsMusic.stop()
        }
    }
}