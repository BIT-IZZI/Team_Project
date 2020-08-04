import React, {useRef, useState} from 'react';
import ReactPlayer from 'react-player'
import { findDOMNode } from 'react-dom'
import Duration from './Duration'
const VideoTest = () => {
   const [state,setState]=useState("")
   const [url,setUrl]=useState(null)
    const[played,setPlayed]=useState(0)
    const[loaded,setLoaded]=useState(0)
    const [controls,setControls]=useState(false)
    const [light,setLight]=useState(false)
    const [volume,setVolume]=useState(0.8)
    const [muted,setMuted]=useState(false)
    const [duration,setDuration]=useState(0)
    const [playbackRate,setPlaybackRate]=useState(1.0)
    const [loop,setLoop]=useState(false)
    const [pip,setPip]=useState(false)
    const [playing,setPlaying]=useState(true)
    const [seeking,setSeeking]=useState(false)
    const [parseFloat,setParseFloat]=useState(1)
    const load = url => {
    setState({
            url,
            played: 0,
            loaded: 0,
            pip: false
        })
    }

    const  renderLoadButton = (url, label) => {
       return (
           <button onClick={() => load(url)}>
               {label}
           </button>
       )
   }
   const  handlePlayPause = () => {
       setPlaying(false )
   }

   const handleTogglePIP = () => {
       setPip(true)
    }

   const handlePlay = () => {
        console.log('onPlay')
       setPlaying( playing)
    }
   const handleEnablePIP = () => {
        console.log('onEnablePIP')
       setPip(true)
    }
    const handleDisablePIP = () => {
        console.log('onDisablePIP')
        setPip(!pip)
    }
    const   handlePause = () => {
        console.log('onPause')
        setPlaying(false)
    }
    const handleEnded = () => {
        console.log('onEnded')
        setPlaying(loop)
    }
   const handleDuration = (duration) => {
        console.log('onDuration', duration)
        setDuration( duration )
    }
    const  ref = player => {
        setPlayer(player)
    }
    const [player,setPlayer] = useState("")

    const playerref = useRef(ref)
   const handleProgress = state => {
        console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        if (!seeking) {
            setState(state)
        }
    }
    const   handleSetPlaybackRate = e => {
        setParseFloat(e.target.value)
    }
    const   handleSeekMouseDown = e => {
        setSeeking( true )
    }
    const  handleSeekChange = e => {
        setParseFloat(e.target.value)
    }


    const SEPARATOR = ' · '
    return (
        <div>
            <ReactPlayer  ref={playerref}
                          className='react-player'
                          width='1000px'
                          height='500px'
                          url={"https://youtu.be/NgHu-hnW8KQ"}
                          pip={pip}
                          playing={playing}
                          controls={controls}
                          light={light}
                          loop={loop}
                          playbackRate={playbackRate}
                          volume={volume}
                          muted={muted}
                          onReady={() => console.log('onReady')}
                          onStart={() => console.log('onStart')}
                          onPlay={handlePlay}
                          onEnablePIP={handleEnablePIP}
                          onDisablePIP={handleDisablePIP}
                          onPause={handlePause}
                          onBuffer={() => console.log('onBuffer')}
                          onSeek={e => console.log('onSeek', e)}
                          onEnded={handleEnded}
                          onError={e => console.log('onError', e)}
                          onProgress={handleProgress}
                          onDuration={handleDuration} />


            <table>
          {/*      <tr>
                    <th>유투브</th>
                    <td>
                        {renderLoadButton('https://www.youtube.com/watch?v=oUFJJNQGwhk', 'Test A')}
                        {renderLoadButton('https://www.youtube.com/watch?v=jNgP6d9HraI', 'Test B')}
                    </td>
                </tr>*/}
                <tbody>
                <tr>
                    <th>Controls</th>
                    <td>

                        <button onClick={handlePlayPause}>{playing ? '일시정지' : 'Play'}</button>

                        {light &&
                        <button onClick={() => player.showPreview()}>Show preview</button>}
                        {ReactPlayer.canEnablePIP(url) &&
                        <button onClick={handleTogglePIP}>{pip ? 'Disable PiP' : 'Enable PiP'}</button>}
                    </td>
                </tr>
              {/*  <tr>
                    <th>Speed</th>
                    <td>
                        <button onClick={handleSetPlaybackRate} value={1}>1x</button>
                        <button onClick={handleSetPlaybackRate} value={1.5}>1.5x</button>
                        <button onClick={handleSetPlaybackRate} value={2}>2x</button>
                    </td>
                </tr>
                <tr>
                    <th>Seek</th>
                    <td>
                        <input
                            type='range' min={0} max={0.999999} step='any'
                            value={played}
                            onMouseDown={handleSeekMouseDown}
                            onChange={handleSeekChange}

                        />
                    </td>
                </tr>
                <tr>
                    <th>Volume</th>

                </tr>
                <tr>
                    <th>
                        <label htmlFor='controls'>Controls</label>
                    </th>

                </tr>
                <tr>
                    <th>
                        <label htmlFor='muted'>Muted</label>
                    </th>

                </tr>

                <tr>
                    <th>Played</th>
                    <td><progress max={1} value={played} /></td>
                </tr>
                <tr>
                    <th>Loaded</th>
                    <td><progress max={1} value={loaded} /></td>
                </tr>*/}
                </tbody>
            </table>


            <table>
                <tbody>
                <tr>
                    <th>url</th>
                    <td className={!url ? 'faded' : ''}>
                        {(url instanceof Array ? 'Multiple' : url) || 'null'}
                    </td>
                </tr>
                <tr>
                    <th>playing</th>
                    <td>{playing ? 'true' : 'false'}</td>
                </tr>
                <tr>
                    <th>volume</th>
                    <td>{volume.toFixed(3)}</td>
                </tr>
                <tr>
                    <th>duration</th>
                    <td><Duration seconds={duration} /></td>
                </tr>
                <tr>
                    <th>remaining</th>
                    <td><Duration seconds={duration * (1 - played)} /></td>
                </tr>
               {/* <tr>
                    <th>played</th>
                    <td>{played.toFixed(3)}</td>
                </tr>
                <tr>
                    <th>loaded</th>
                    <td>{loaded.toFixed(3)}</td>
                </tr>

                <tr>
                    <th>elapsed</th>
                    <td><Duration seconds={duration * played} /></td>
                </tr>*/}

                </tbody>
            </table>
        </div>
    );
};

export default VideoTest;