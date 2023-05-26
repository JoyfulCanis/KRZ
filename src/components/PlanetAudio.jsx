import React, { useRef, useState } from 'react';
import sample from '../assets/audio/sample.mp3'
const PlanetAudio = () => {

const [isPlaying, setIsPlaying] = useState(false);
const audioRef = useRef(null)

const togglePlay = () =>{
    if (isPlaying){
        audioRef.current.pause();
    }else{
        audioRef.current.play();
    }
    setIsPlaying(!isPlaying)
}

    return (
        <div className='home-main__planet'>
            <audio ref={audioRef} src={sample}/>
            <button className='play-button' type="button" onClick={togglePlay}><div className={isPlaying?"bars":"triangle"}></div></button>
        </div>
    );
};

export default PlanetAudio;