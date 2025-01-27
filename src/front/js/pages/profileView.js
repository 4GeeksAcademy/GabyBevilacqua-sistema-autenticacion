import React, { useContext } from "react";
import { Profile } from "../component/profile";
import imagenFondo from "../../img/imagenFondo.jpg"


export const ProfileView = () => {

    return (
        <div className="image-container" style={{ backgroundImage: `url(${imagenFondo})` }}>
            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                <div className="col-8 mx-auto">
                    <Profile />
                </div>
            </div>
        </div>
    );
};