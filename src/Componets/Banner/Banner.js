import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Banner.css"
function Banner() {
    return (
        <Container >
            <Row>
                <Col>
                    <div>
                        <h1>
                            GOVERNMENT POLYTECHNIC COLLEGE<br /> PERUMBAVOOR
                        </h1>
                        <p className="place">
                            Koovappady P.O Erankulam - 683 544 Kerala
                        </p>
                    </div>

                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='text-primary'>
                        <h2 className="placementHead">
                            PLACEMENT CELL
                        </h2>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner
