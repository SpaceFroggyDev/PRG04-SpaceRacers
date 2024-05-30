import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Input, Keys, Scene, Camera, Color, SolverStrategy} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { TitleScreen } from './titlescreen.js'
import { Level } from './level.js'
import { VictoryScreen } from './victoryscreen.js'

export class Game extends Engine {
    constructor() {
        super({ 
            width: 400,
            height: 225,
            maxFps: 60,
            backgroundColor: Color.fromHex('#28282e'),
            displayMode: DisplayMode.FitScreen,
            antialiasing: false,
            physics: {
                solver: SolverStrategy.Realistic,
                gravity: new Vector(0,0)
            }
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    timeScore = 999
    p1wins = false
    p2wins = false

    startGame() {
        this.add('level', new Level())
        this.add('titlescreen', new TitleScreen())
        this.add('victoryscreen', new VictoryScreen())
        this.goToScene('titlescreen')
    }
}

new Game()
