import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


export const Header = () =>{
    return(
        <div className="header">
            <Container fluid>  
                <Row>
                    <Col>
                    <Link to="/">
                    <img src={require("../Assets/Images/logo-w.png")} alt="logo" />
                    </Link>
                    </Col>
                    <Col>
                    <div className="menu">
                        <Link to="/">home</Link>
                        <Link to="/about">about</Link>
                    </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}