import React, { useContext } from "react";
//import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Signup = () => {   

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Súbete por aquí... Solo si quieres!</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Tu lindo nombre</label>
                            <input type="text" className="form-control" id="name" placeholder="Poner nombre" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Tu Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Poner email" />
                            <small id="emailHelp" className="form-text text-muted">No compatiremos tu email con nadie. Te lo prometemos!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <Link to="/loginView">
                        <button type="submit" className="btn btn-primary">Pinchame!</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};