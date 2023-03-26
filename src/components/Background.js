import React from "react";
import Background from "../assets/background.mp4"

const Background = () => {
    return (
        <div className='background'>
            <video src={Background} autoPlay loop muted />
        </div>
    )
}

export default Background;