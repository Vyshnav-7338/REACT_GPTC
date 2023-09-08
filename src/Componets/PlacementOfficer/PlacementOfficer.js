import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./PlacementOfficer.css"
import image from './placement.jpg'
function PlacementOfficer() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <div className='placementDetailsInfo'>
                        <p>

                            Quality employment for Sustainability is the prime motto of our Career Guidance and Placement
                            Cell. Near to 100%, placements happen through on-campus and off-campus modes. We ensure that at
                            least 20% of students of every program are nurtured with all skills required for ready
                            employment through Industry on Campus (IoC), Production and Training Center (PAT), FABLab,
                            Outreach programs, and IEDC activities. These students are mentored with all skills needed for
                            industry including skills needed for better customer interaction, Technical skills that are
                            needed to perform from day 1 of employment without additional training. Functioning as a
                            centralized hub for recruitment, the college offers the following facilities for centralized
                            placements.

                        </p>
                        <ul>
                            <li>State-of-the-art auditorium complex with 850 PAX and generator backup.</li>
                            <li>Seminar hall with 120 PAX with PA and ICT facilities.</li>
                            <li>Mini seminar hall for online interaction system set with IT infrastructure worth 20 lakhs by
                                Kerala</li>
                            <li>State Information Technology Infrastructure Limited.</li>
                            <li>More than 250 computers on the network for online examinations.</li>
                            <li>Two numbers of interview rooms for campus placements.</li>
                            <li>Language lab with 25 computers to test language proficiency.</li>
                        </ul>

                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className='placementOfficerDetails'>
                        <img src={image} alt="" />
                        <p className='placementOfficerName' >Vipin V</p>
                        <p className='placementOfficer'>Placement Officer</p>
                        <p class="text-info">
                            Email : placement@gptcperumbavoor.ac.in<br />
                            Phone : 7907843953 / 9847830579

                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PlacementOfficer
