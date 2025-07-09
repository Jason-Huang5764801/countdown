for (let countdown = 0; countdown <= 4; countdown++) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    basic.showNumber(3 - countdown)
}
music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showString("GO!")
