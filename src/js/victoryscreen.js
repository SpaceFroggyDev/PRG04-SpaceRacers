import { Actor, Engine, Vector, DisplayMode, Input, Keys, Scene, Camera, Label, Font, FontUnit, Color} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { UI } from './ui.js'

export class VictoryScreen extends Scene {

    highscore = 0
    winner = 0
    winnerLabel
    highScoreLabel
    finalScore

    onInitialize(engine) {
        const victoryscreenimg = new Actor()
        this.add(victoryscreenimg)
        victoryscreenimg.graphics.use(Resources.VictoryScreenImg.toSprite())
        victoryscreenimg.pos =  new Vector(200,112.5)

    }
    onActivate(ctx) {
        Resources.VictoryMusic.play(0.5)
        
        if (this.engine.timeScore > this.highscore) {
            this.highscore = this.engine.timeScore;
        }

        if (this.engine.p1wins === true) {
            this.winner = 1
            this.engine.p1wins = false
        } else if (this.engine.p2wins === true) {
            this.winner = 2
            this.engine.p2wins = false
        }

        this.finalScore = new Label({
        text:`Your score is 0${this.engine.timeScore}`,
        pos: new Vector(110, 150),
        font: Resources.PixelFont.toFont({
        unit: FontUnit.Px,
        size: 10,
        color: Color.White
            })
        })

        this.highScoreLabel = new Label({
        text:`Your highscore is 0${this.highscore}`,
        pos: new Vector(110, 50),
        font: Resources.PixelFont.toFont({
        unit: FontUnit.Px,
        size: 10,
        color: Color.White
            })
        })

        this.winnerLabel = new Label({
        text:`Player ${this.winner} wins!`,
        pos: new Vector(110, 100),
        font: Resources.PixelFont.toFont({
        unit: FontUnit.Px,
        size: 10,
        color: Color.White
            })
        })

        this.add(this.highScoreLabel)
        this.add(this.winnerLabel)
        this.add(this.finalScore)
    }
    onPreUpdate(engine){
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.engine.goToScene('titlescreen')
            Resources.VictoryMusic.stop()
            this.winnerLabel.kill()
            this.highScoreLabel.kill()
            this.finalScore.kill()
        }
    }
}