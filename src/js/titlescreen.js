import { Actor, Engine, Vector, DisplayMode, Input, Keys, Scene, Camera} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Level } from './level.js'

export class TitleScreen extends Scene {
    onInitialize(engine) {
        const titlescreenimg = new Actor()
        this.add(titlescreenimg)
        titlescreenimg.graphics.use(Resources.TitleScreenImg.toSprite())
        titlescreenimg.pos =  new Vector(200,112.5)
    }
    onActivate(ctx) {
       Resources.MenuMusic.play(0.5)
    }
    onPreUpdate(engine){
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.engine.goToScene('level')
            Resources.MenuMusic.stop()
        }

        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            this.engine.goToScene('controlsscreen')
            Resources.MenuMusic.stop()
        }
    }
}