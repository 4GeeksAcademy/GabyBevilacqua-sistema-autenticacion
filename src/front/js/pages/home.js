import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Signup } from "../component/signup";
import "../../styles/home.css";
import video001 from "../../img/video001.mp4";

export const Home = () => {
	const { store, actions } = useContext(Context);

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
			<div className="container fondoSignup text-center mt-5">


				<h1 className="text-white animate__animated animate__pulse">Bienvenido a mi último proyecto/tarea de la escuela!!!</h1>
				< Signup />

				<div className="alert alert-info text-center mx-auto col-6 mt-5">
					{store.message || "Loading message from the backend (make sure your python backend is running)..."}
				</div>

				<p>
					This boilerplate comes with lots of documentation:{" "}
					<a href="https://start.4geeksacademy.com/starters/react-flask">
						Read documentation
					</a>
				</p>

			</div>
		</div>
	);
};
