import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Signup } from "../component/signup";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">


			<h1>Bienvenido a mi último proyecto de la escuela!!!</h1>
			< Signup />

			<div className="alert alert-info mt-5">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>

			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>

		</div>
	);
};
