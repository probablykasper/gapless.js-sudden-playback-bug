const Gapless = require('gapless.js')

document.querySelector('#button').addEventListener('click', () => {
  if (!window.player) {
    window.player = new Gapless.Queue({
      numberOfTracksToPreload: 2,
      tracks: [
        location.origin+'/neo-soul-short.m4a', // 5 seconds long
        location.origin+'/neo-tokyo-short.m4a', // 38 seconds long
        location.origin+'/neo-tokyo-short.m4a', // 38 seconds long
      ]
    })
    console.log(location.origin+'/neo-tokyo-short.m4a')
    player.addTrack({trackUrl: location.origin+'/neo-soul-short.m4a'})
    player.addTrack({trackUrl: location.origin+'/neo-tokyo-short.m4a'})
  }
  console.log(player)
  player.play()
  setTimeout(() => {
    console.log('pause')
    player.pause()
  }, 2000)
})
