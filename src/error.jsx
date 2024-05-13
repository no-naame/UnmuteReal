import React from 'react';
import sorry from './assets/lotteUnmute.json'
import Lottie from "lottie-react";
const Error = () => {
    return (
        <div>
            <Lottie animationData={sorry}/>
        </div>
    );
};

export default Error;