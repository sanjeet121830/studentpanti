import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import pic1 from "./pic1.jpg"
import pic2 from "./pic2.jpg"
import pic3 from "./pic3.jpg"
import nature1 from './nature1.jpg'
import nature2 from './nature2.jpg'
import nature3 from './nature3.jpg'
function Slider() {
    return (
        <div>

            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={nature1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>BPSE PRELIMS</h3>
                        <p>This test series will bost your preparation</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={nature2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={nature3}
                        alt="Third slide"

                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default Slider
