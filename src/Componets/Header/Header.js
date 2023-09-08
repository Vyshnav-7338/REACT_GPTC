import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo-removebg-preview.png'
import { useNavigate } from 'react-router-dom';
import "./Header.css"
function Header() {
    const Navigate =useNavigate()
    return (
        <div className='Container'>
            <Navbar expand="lg" className=" navbar">
                <Container fluid>
                    <img className='logo' src={logo} alt="" />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="Nav m-auto pl-5 my-2 my-lg-0"
                            style={{ maxHeight: '250px' }}
                            navbarScroll
                        >

                            <Nav.Link className='Link' onClick={()=>{
                                Navigate('/')
                            }}>Home</Nav.Link>
                            <Nav.Link className='Link' href="#">About Us</Nav.Link>
                            <NavDropdown className='Link' title="Department" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#">action</NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className='Link' title="Placement" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#">action</NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className='Link' title="Admission" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#">Admission</NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className='Link' title="Activices" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#">action</NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='Link' href="#">Gallery</Nav.Link>
                            <NavDropdown className='Link' title="StudentsDetails" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/RegisterStudents">
                                Register Students
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/StudentsList">StudentsList</NavDropdown.Item>
                            </NavDropdown>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
