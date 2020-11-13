import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import dk from "./dk.jpg"
function About() {
    return (
        <div>
            <Container fluid className="mt-3">
                <Row>
                    <Col  sm={8}>
                        <h3>About Me</h3><br />
                        <div className="intro-content">
                            <p>Hi All I am Dharmendra Kumar Nishad i did my matriculation from my villgae and afte that i move to Samastipur Bihar and after that i move to patna for preparing competitive exam</p>
                            

                        </div>
                    </Col>
                    <Col className="d-flex">
                    <img
                            className="d-block w-100"
                            src={dk}
                            alt="First slide"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
