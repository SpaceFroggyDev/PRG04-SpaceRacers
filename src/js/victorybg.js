import { Actor, Vector, Sprite } from "excalibur"
import { Resources } from './resources'

export class VictoryBg extends Actor {

    sprite

    onInitialize(engine){
        this.victoryimg = new Sprite({
            image: Resources.VictoryScreenImg,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.victoryimg)
    }

    onPostUpdate(engine, delta) {
        this.victoryimg.sourceView.x += .05 * delta;
    }
}