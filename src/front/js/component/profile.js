import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";



export const Profile = () => {
    const { userOut, setUserOut } = useContext(Context)
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();

    const projects = [
        {
            title: "TableClick",
            description: "Proyecto de fin de curso. Una web para restaurante con atencion en la mesa directamente desde una tablet.",
            image: "https://img.freepik.com/foto-gratis/hamburguesa-hamburguesa-hamburguesa-queso_505751-3697.jpg?t=st=1738172944~exp=1738176544~hmac=f0e685497286bf46130b16de93a646b71de9e60e8a7cebe7c4e057dca3ee58aa&w=740"
        },
        {
            title: "Autenticación",
            description: "Este proyecto que estás viendo, que con dos cosas más servía como proyecto final de curso jajaja",
            image: "https://img.freepik.com/foto-gratis/ilustracion-3d-fondo-abstracto-raton-teclado-placa-circuito-computadora_1057-46073.jpg?t=st=1738172866~exp=1738176466~hmac=1dc5430ac5bed5f431ff60359a6b4ae0f561e78ff130cdd2af2499e94916940a&w=740"
        },
        {
            title: "StarWars API",
            description: "Una API de SW con modelo de datos y relaciones entre planetas, personajes y vehículos",
            image: "https://img.freepik.com/foto-gratis/hombre-casco-palabra-guerra-galaxias-el_1340-39446.jpg?t=st=1738172992~exp=1738176592~hmac=f65fb8fd81222a4d53106813a3c2b52b48889fe97fe272b45a7a17630cdb0ff6&w=740"
        }
    ]

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

        <div className="container containerProfile col-10">
            <div className="row my-4">

                <div className="col md-8">

                    <h2 className="text-white">{store.user?.name}</h2>
                    <p className="text-white">
                        Ya sé que no son tus proyectos,
                        pero quería mostrar algo lindo aquí,
                        y que mejor que mis proyectos!!!.
                    </p>

                </div>
            </div>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col md-4 mb-4" key={index}>
                        <Card>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

    )
};

/* 
 <div className="col md-4" >
                        
                    </div>*/