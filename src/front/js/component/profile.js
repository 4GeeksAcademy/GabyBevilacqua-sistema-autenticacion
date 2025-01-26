import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
//import "../../styles/home.css";


export const Profile = () => {
    const { userOut, setUserOut } = useContext(Context)
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();

    const projects = [
        {
            title: "Proyecto 1",
            description: "Descripción del proyecto 1",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Proyecto 2",
            description: "Descripción del proyecto 2",
            image: "https://via.placeholder.com/150"
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

        <div className="container">
            <Row className="my-4">
                <Col md={4}>
                    {/* <img src={user.profileImage} alt="Profile" className="img-fluid rounded-circle" /> */}
                </Col>
                <Col md={8}>
                    <h2>{store.user?.name}</h2>
                    <Button variant="primary" className="mr-2">Editar Datos</Button>
                    <Button variant="danger" onClick={handleLogout}>Cerrar Sesión</Button>
                </Col>
            </Row>
            <Row>
                {projects.map((project, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
};