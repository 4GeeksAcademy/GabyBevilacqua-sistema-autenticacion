import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
//import "../../styles/home.css"; 

export const Signup = () => {

    const { actions } = useContext(Context);
    const navigate = useNavigate()
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };
    // para la barra de ls contrasenas
    const handleChangeBarr = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        evaluateStrength(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const success = await actions.registerUser(formData); // Asume que devuelve `true` o lanza error
            if (success) {
                alert("Usuario creado con éxito, inicia sesion");
                navigate("/loginView");
            }
        } catch (error) {
            // Mostrar el mensaje de error del servidor
            alert(error.message || "Error al registrar el usuario");
        }
    };
    // para la barra de ls contrasenas
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);

    const evaluateStrength = (pwd) => {
        let score = 0;

        if (pwd.length >= 8) score++; // Longitud mínima
        if (/[A-Z]/.test(pwd)) score++; // Contiene mayúsculas
        if (/[a-z]/.test(pwd)) score++; // Contiene minúsculas
        if (/[0-9]/.test(pwd)) score++; // Contiene números
        if (/[^A-Za-z0-9]/.test(pwd)) score++; // Contiene caracteres especiales

        setStrength(score);
    };

    const getProgressBarColor = () => {
        switch (strength) {
            case 1:
                return 'bg-danger'; // Rojo
            case 2:
                return 'bg-warning'; // Amarillo
            case 3:
                return 'bg-info'; // Azul
            case 4:
                return 'bg-primary'; // Azul fuerte
            case 5:
                return 'bg-success'; // Verde
            default:
                return 'bg-secondary'; // Gris
        }
    };


    return (
        <div className="container text-white">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Súbete por aquí... Solo si quieres!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Tu lindo nombre</label>
                            <input
                                type="text"
                                className="form-control inputStyle"
                                id="name"
                                placeholder="Hechame tu nombre por aqui anda"
                                value={formData.name}
                                onChange={handleChange}
                                required

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Tu Email</label>
                            <input
                                type="email"
                                className="form-control inputStyle"
                                id="email"
                                placeholder="Dame tu email"
                                value={formData.email}
                                onChange={handleChange}
                                required

                            />
                            <small id="emailHelp" className="form-text text-white">No compatiremos tu email con nadie. Te lo prometemos!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control inputStyle"
                                id="password"
                                placeholder="Te lo dejé sencillo para que no te compliques"
                                value={formData.password}
                                onChange={handleChangeBarr}
                                required

                            />
                        </div>
                        <div className="mt-2 mb-2">
                            <div className="progress" style={{ height: '6px' }}>
                                <div
                                    className={`progress-bar ${getProgressBarColor()}`}
                                    role="progressbar"
                                    style={{ width: `${(strength / 5) * 100}%` }}
                                    aria-valuenow={strength}
                                    aria-valuemin="0"
                                    aria-valuemax="5"
                                ></div>
                            </div>
                        </div>
                        <button type="submit" className="me-2 mt-2">Pinchame!</button>
                        <Link to="/loginView">
                            <button className="me-2 mt-2">Ir a login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};