import { ImageSource, Sound, Resource, Loader, FontSource, ImageWrapping } from 'excalibur'
import { TitleScreen } from './titlescreen'
import { VictoryScreen } from './victoryscreen'

// voeg hier jouw eigen resources toe
const Resources = {
    PlayerOne: new ImageSource('images/playerone.png'),
    PlayerTwo: new ImageSource('images/playertwo.png'),
    RaceTrack: new ImageSource('images/racetrackbg.png'),
    RaceTrack2: new ImageSource('images/racetrackbg2.png'),
    TitleScreenImg: new ImageSource('images/titlescreen.png'),
    VictoryScreenImg: new ImageSource('images/victoryscreen.png', { wrapping: ImageWrapping.Repeat}),
    ControlsScreen: new ImageSource('images/controlsscreen.png'),
    PixelFont: new FontSource('fonts/PressStart2P-Regular.ttf', 'PressStart'),
    RaceTrackMusic: new Sound('sound/racetrack.mp3'),
    VictoryMusic: new Sound('sound/victory.mp3'),
    MenuMusic: new Sound('sound/mainmenu.mp3'),
    ControlsMusic:new Sound('sound/controls.mp3')
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }