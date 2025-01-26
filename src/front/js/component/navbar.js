import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light col-8 mx-auto">
			<div className="container">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
						<Link to="/">
						<li className="dropdown-item">Editar</li>
						</Link>
					</ul>
				</div>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
