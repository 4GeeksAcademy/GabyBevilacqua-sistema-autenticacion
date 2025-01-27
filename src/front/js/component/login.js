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
        <div className="container text-white">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="animate__animated animate__heartBeat">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group mt-3">
                            <label htmlFor="email">Pon tu email</label>
                            <input
                                type="email"
                                className="form-control mt-3"
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Email"
                            />
                            <small id="emailHelp" className="form-text text-white mb-5">Te seguimos prometiendo que no le daremos a nadie tu email. Pendejo el que lo crea.</small>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control  mt-3"
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <button
                            className="mt-3"                  
                            >
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};