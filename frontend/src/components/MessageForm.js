import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function MessageForm() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (<>
        <div className="mb-20 border border-secondary " style={{ height: "80vh" }}></div>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={11} >
                    <Form.Group>
                        <Form.Control type="text" placeholder="Your message" />
                    </Form.Group>
                </Col>
                <Col md={1}>
                    <Button variant="primary" type="submit" style={{ width: "100%", backgroundColor: "orange" }}>
                        <i className="fas fa-paper-plane" />
                    </Button>
                </Col>
            </Row>
        </Form>

    </>);
}

export default MessageForm;