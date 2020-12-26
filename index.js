const Gapless = require('gapless.js')

document.querySelector('#button').addEventListener('click', () => {
  if (!window.player) {
    window.player = new Gapless.Queue({
      numberOfTracksToPreload: 2,
    })
    player.addTrack({trackUrl: location.origin+'/neo-soul-short.m4a'}) // 38 seconds long
    player.addTrack({trackUrl: location.origin+'/neo-tokyo-short.m4a'}) // 38 seconds long
    player.addTrack({trackUrl: location.origin+'/neo-tokyo-short.m4a'}) // 38 seconds long
  }
  player.play()
  setTimeout(() => {
    player.pause()
  }, 2000)
})
