import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { stringsToSpeak } from './stringsToSpeak';
import Webcam from 'react-webcam';
import './startInterview.scss';
import Image from "./image.png";


const TextToSpeech = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [result, setResutl] = useState('Waiting....');
    const [timeElapsed, setTimeElapsed] = useState(0);

    const speakText = (text) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex < stringsToSpeak.length) {
                speakText(stringsToSpeak[currentIndex]);
                setResutl(stringsToSpeak[currentIndex])
                setCurrentIndex(prevIndex => prevIndex + 1);
                setTimeElapsed(0);

            } else {
                clearInterval(intervalId);
            }
        }, 120000); // 2 minutes in milliseconds

        const timerId = setInterval(() => {
            setTimeElapsed(prevTime => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
            clearInterval(timerId);
        };
    }, [currentIndex]);



    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} minutes ${remainingSeconds} seconds`;
    };

    const webcamRef = React.useRef(null);

    return (
        <>
            <div className="container">
                <div className="upperSection">
                    <div className="video">
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            className='webcam'
                        />
                        <div className='result'>
                            <div>Time Elapsed:  {formatTime(timeElapsed)} seconds - 2 mins</div>
                            <div style={{color:"red"}}>{result} </div>
                        </div>
                    </div>

                    <div className="interviewer">
                        <img src= {Image} alt="" />
                        <img src= {Image} alt="" />
                        <img src= {Image} alt="" />
                        <img src= {Image} alt="" />
                        <img src= {Image} alt="" />
                        <img src= {Image} alt="" />
                        <img src= {Image} alt="" />
                        <img src= {Image} alt="" />
                        <img src= {Image} alt="" />
                        <img src= {Image} alt="" />

                    </div>
                </div>

                <div className="lowerSection">
                    <Link to="/" className='link'><button>End</button></Link>

                    <Outlet />
                </div>
            </div>






        </>
    );
};

export default TextToSpeech;
