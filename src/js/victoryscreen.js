import { Actor, Engine, Vector, DisplayMode, Input, Keys, Scene, Camera, Label, Font, FontUnit, Color} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { VictoryBg } from './victorybg.js'
import { UI } from './ui.js'

export class VictoryScreen extends Scene {

    highscore = 0
    winner = 0
    winnerLabel
    highScoreLabel
    finalScore

    onInitialize(engine) {
        this.victoryimg = new VictoryBg()
        this.add(this.victoryimg)

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
        text:`Score: 0${this.engine.timeScore}`,
        pos: new Vector(250, 50),
        font: Resources.PixelFont.toFont({
        unit: FontUnit.Px,
        size: 10,
        color: Color.White
            })
        })

        this.highScoreLabel = new Label({
        text:`Highscore: 0${this.highscore}`,
        pos: new Vector(50, 50),
        font: Resources.PixelFont.toFont({
        unit: FontUnit.Px,
        size: 10,
        color: Color.White
            })
        })

        this.winnerLabel = new Label({
        text:`Player ${this.winner} wins!`,
        pos: new Vector(60, 120),
        font: Resources.PixelFont.toFont({
        unit: FontUnit.Px,
        size: 20,
        color: Color.White
            })
        })

        this.add(this.highScoreLabel)
        this.add(this.winnerLabel)
        this.add(this.finalScore)
    }
    onPreUpdate(engine){
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.engine.goToScene('level2')
            Resources.VictoryMusic.stop()
            this.winnerLabel.kill()
            this.highScoreLabel.kill()
            this.finalScore.kill()
        }

        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            this.engine.goToScene('titlescreen')
            Resources.VictoryMusic.stop()
            this.winnerLabel.kill()
            this.highScoreLabel.kill()
            this.finalScore.kill()
        }
    }
}