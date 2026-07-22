import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Err() {
    const navigate = useNavigate()
    const [time, setTime] = useState(5)

    if (time < 1) {
        navigate('/')
    }

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(time - 1);
        }, 1000)
        return () => {
            clearInterval(timer)
        };
    },);

    return (
        <>
            <div className="error-page">
                <div className="error-container">
                    <div className="error-content">
                        <h1>Lost your path?</h1>
                        <span className="error-tag">Looks like you ran into an error...</span>
                        <span className="error-redirect d-block">Don't worry, we're taking you back to the website in {time} seconds</span>
                    </div>
                    <div className="error-logo">
                        <img src="assets/images/msq_logo.png" alt="MenteSquare Logo"/>
                    </div>
                </div>
            </div>
        </>
    )
}