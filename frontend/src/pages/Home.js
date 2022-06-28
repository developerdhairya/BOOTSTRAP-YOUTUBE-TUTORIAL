import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

function Home() {
    return <Row>
        <Col md={6} className="d-flex flex-drection-column align-items-center justify-content-center" >
            <div>
                <h1>Share the world with your friends</h1>
                <p>Chat app lets you connect to world</p>
                <LinkContainer to="/chat">
                    <Button variant="success">
                        Get Started
                        <i className="fas fa-comments home-message-icon ms-2"/>
                    </Button>
                </LinkContainer>
            </div>
        </Col>
        <Col md={6} className="home__bg"></Col>
    </Row>;
}

export default Home;