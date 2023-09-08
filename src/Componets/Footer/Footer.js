import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
function Footer() {
    return (
        <Container fluid className='footer'>
            <Row>
                <Col s={12} md={4} xl={4}>
                    <div className='pb-5 ' >
                        <h5 class="linksHead">
                            Govt. Polytechnic College, Perumbavoor
                        </h5>
                        <p>Koovappady P.O., Perumbavoor<br />
                            Ernakulam Dist - 683 544<br />
                            Kerala, India</p>
                        <i><FontAwesomeIcon icon={faPhone} /> 0484-2649251</i><br />
                        <i><FontAwesomeIcon icon={faEnvelope} />gptcpbvr@gmail.com</i>

                    </div>

                </Col>
                <Col s={12} md={4} xl={4}>
                    <div className='pb-5'>
                        <h5 className="linksHead">
                            Login
                        </h5>
                        <p><a className="link-opacity-75 text-dark " href="https://www.gptcperumbavoor.ac.in/">Website</a></p>
                        <p><a className="link-opacity-75 text-dark " href="/#">E-mail Login</a></p>
                        <p><a className="link-opacity-75 text-dark " href="/#">Student Login</a></p>
                        <p><a className="link-opacity-75 text-dark " href="/#">Parent Login</a></p>
                        <p><a className="link-opacity-75 text-dark " href="/#">Staff Login</a></p>
                    </div>

                </Col>
                <Col s={12} md={4} xl={4}>
                    <div className='pb-5'>
                        <h5 className="linksHead">
                            Important Links
                        </h5>
                        <p><a className="link-opacity-75 text-dark " href="https://www.gptcperumbavoor.ac.in/">All India Council
                            for Technical Education (AICTE)
                        </a></p>
                        <p><a className="link-opacity-75 text-dark " href="/#">Directorate of Technical Education (DTE)</a></p>
                        <p><a className="link-opacity-75 text-dark " href="/#">Polytechnic Admission</a></p>
                        <p><a className="link-opacity-75 text-dark " href="/#">Technical Examinations</a></p>
                        <p><a className="link-opacity-75 text-dark " href="/#">State Institue of Technical Teachers Training &
                            Research (SITTTR)</a></p>
                    </div>

                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='copyRight'>
                        <i><FontAwesomeIcon icon={faCopyright} />copyright<b>Govt. Polytechnic College, Perumbavoor</b></i>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
