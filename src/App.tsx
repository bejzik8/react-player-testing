import { useRef, useEffect } from 'react'
import ReactPlayer from 'react-player'

import arenaHDVideo from '../src/assets/20220307183521_arenahd.m3u8'
import video from '../src/assets/wwv_hero_vid1.mp4'
import Hls from 'hls.js'

const src = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
const src2 = 'http://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_stereo_subs.m3u8'

function App() {
  const videoPlayerRef = useRef<HTMLMediaElement>(null)

  useEffect(() => {
    getHLS()
  }, [])

  const getHLS = () => {
    if (Hls.isSupported()) {
      console.log('HELLO HLS JS')
      var video: any = document.getElementById('video')
      console.log(video)
      const hls = new Hls()
      console.log(hls)
      hls.attachMedia(video)
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log('video and hls.js are now bound together !')
        hls.loadSource(src2)
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
          console.log(
            'manifest loaded, found ' + data.levels.length + ' quality level'
          );
        });
      });
    }
  }

  return (
    <div>
      <p>Testing react-player...</p>
      <video id='video' width="750" height="500" controls ></video>
    </div>
  )
}

export default App
