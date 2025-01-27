import React, { useContext } from "react";
import { Login } from "../component/login";
import "../../styles/home.css";
import video001 from "../../img/video001.mp4";

export const LoginView = () => {

    return (
        <div className="video-container">
            <video
                className="background-video"
                autoPlay
                loop
                muted
            >
                <source src={video001} type="video/mp4" />

            </video>

            <div className="container fondoSignup text-center mt-5 p-5 col-6 mx-auto ">
                < Login />
            </div>
        </div>
    )
};