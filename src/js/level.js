import { Actor, Engine, Vector, DisplayMode, Input, Keys, Scene, Camera, Timer, Label, Font, FontUnit, Color, ScreenElement} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { PlayerOne } from './playerone.js'
import { PlayerTwo } from './playertwo.js'
import { RaceTrack } from './racetrack.js'
import { Finish } from './finish.js'
import { WayPoint } from './waypoint.js'
import { UI } from './ui.js'


export class Level extends Scene {
    onInitialize(engine) {

        this.ui = new UI()
        this.add(this.ui)

        this.timer = new Timer({
            fcn: () => this.ui.scoreText.text = `Score: 0${this.ui.timeScore--}`,
            interval: 100,
            repeats: true
        })
        this.add(this.timer)
        this.timer.start()

        let racetrack = new RaceTrack()
        this.add(racetrack)

        let finish = new Finish()
        this.add(finish)

        let playerone = new PlayerOne()
        this.add(playerone)

        let playertwo = new PlayerTwo()
        this.add(playertwo)

        let waypoint1 = new WayPoint()
        waypoint1.pos = new Vector(1,-250)
        this.add(waypoint1)

        let waypoint2 = new WayPoint()
        waypoint2.pos = new Vector(730, -140)
        this.add(waypoint2)

        let waypoint3 = new WayPoint()
        waypoint3.pos = new Vector(435 , 40)
        this.add(waypoint3)

        let waypoint4 = new WayPoint()
        waypoint4.pos = new Vector(435 , 207)
        this.add(waypoint4)

        let waypoint5 = new WayPoint()
        waypoint5.pos = new Vector(-270 , 420)
        this.add(waypoint5)

    }
    onActivate(ctx) {
        Resources.RaceTrackMusic.play()
    }
    finishScene(){
        this.engine.goToScene('victoryscreen')
        Resources.RaceTrackMusic.stop()
        this.timer.stop()
    }
}