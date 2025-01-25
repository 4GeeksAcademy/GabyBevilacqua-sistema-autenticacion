import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

export const Profile = () => {
    const { userOut, setUserOut } = useContext(Context)
    const [user, setUser] = useState({

        name: "John Doe",
        profileImage: "https://via.placeholder.com/150",
        description: "Descripción del usuario",
        projects: [
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
    });

    const logout = () => {
        // Lógica para cerrar sesión
        console.log("Cerrando sesión...");
    };

    return (

        <div className="container">
             <Row className="my-4">
                <Col md={4}>
                    <img src={user.profileImage} alt="Profile" className="img-fluid rounded-circle" />
                </Col>
                <Col md={8}>
                    <h2>{user.name}</h2>
                    <p>{user.description}</p>
                    <Button variant="primary" className="mr-2">Editar Datos</Button>
                    <Button variant="danger" onClick={logout}>Cerrar Sesión</Button>
                </Col>
            </Row>
            <Row>
                {user.projects.map((project, index) => (
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