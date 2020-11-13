import React from 'react'
import { CardDeck, Container, Card, Button } from 'react-bootstrap'
import offer1 from './offer1.jpg'
function Offer() {
    return (
        <div> 
            <Container fluid>
            <h1 className="text-center mt-5">We Offer</h1>
            <CardDeck className="text-center">
                <Card bg="dark" text="light">
                    <Card.Img variant="top" src={offer1} />
                    <Card.Body>
                        <Card.Title>BPSC Prelims TEST SERIES</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.

                        </Card.Text>
                        <Card.Text>
                            <h2>Price: ₹ 499/-</h2>
                        </Card.Text>

                    </Card.Body>
                    <Button style={{borderRadius:"20px"}} variant="outline-primary">Buy Now</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card bg="dark" text="light">
                    <Card.Img variant="top" src={offer1} />
                    <Card.Body>
                        <Card.Title>Bihar SI mains Test Series</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional content.{' '}
                        </Card.Text>
                        <Card.Text>
                            <h2>Price: ₹ 499/-</h2>
                        </Card.Text>
                    </Card.Body>
                    <Button style={{borderRadius:"20px"}} variant="outline-primary">Buy Now</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card bg="dark" text="light">
                    <Card.Img variant="top" src={offer1} />
                    <Card.Body>
                        <Card.Title variant='primary'>Bihar SI Prelims Test Series</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        <Card.Text>
                            <h2>Price: ₹ 499/-</h2>
                        </Card.Text>
                    </Card.Body>
                    <Button style={{borderRadius:"20px"}} variant="outline-primary">Buy Now</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            </Container>
        </div>
    )
}

export default Offer
