import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { actions, store } = useContext(Context);
	const navigate = useNavigate();

	const handleLogout = () => {
		// limpiar user data del localStorage
		localStorage.removeItem("authToken");
		localStorage.removeItem("user");
		actions.logout();
		// success message
		alert("You have successfully logged out.");
		navigate("/");
	};

	return (
		<nav className="navbar navbar-dark bg-dark  mx-auto">
			<div className="container">
				<div className="dropdown">
					<button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Aqui hay cosas
					</button>
					<ul className="dropdown-menu">
						<Link to="/">
							<li className="dropdown-item">Signup</li>
						</Link>
						<Link to="/loginView">
							<li className="dropdown-item">Login</li>
						</Link>
						<Link to="/profileView">
							<li className="dropdown-item">Perfil</li>
						</Link>

						<li
							className="dropdown-item"
							onClick={handleLogout}
						> Cerrar sesion
						</li>

					</ul>
				</div>

			</div>
		</nav>
	);
};
