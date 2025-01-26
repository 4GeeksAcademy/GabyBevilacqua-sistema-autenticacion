import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Login = () => {

    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const success = await actions.loginUser(email, password);
        if (success) {
           navigate("/profileView"); // Redirigir a la página del perfil 
        } else {
            alert("Login failed. Please check your credentials and try again.");
        }
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Pon tu email</label>
                            <input
                                type="email"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Email"
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <button
                            className="btn btn-secondary"
                            
                            >
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};