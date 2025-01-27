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
            title: "Proyecto 1",
            description: "Descripción del proyecto 1",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Proyecto 2",
            description: "Descripción del proyecto 2",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Proyecto 2",
            description: "Descripción del proyecto 2",
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
       
            <div className="container containerProfile col-10">               
                <div className="row my-4">
                   
                    <div className="col md-8">

                        <h2 className="text-white">{store.user?.name}</h2>
                        
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