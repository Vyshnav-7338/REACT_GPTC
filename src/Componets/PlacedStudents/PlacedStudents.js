import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./PlacedStudents.css"
import { FirebaseContext } from '../../store/FirebaseContext'
import { Link } from 'react-router-dom'
function Students() {
    const { firebase } = useContext(FirebaseContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        firebase.firestore().collection('Students').where("status", "==", 'Placed').get().then((snapshot) => {
            const allPost = snapshot.docs.map((product) => {
                return {

                    ...product.data(),
                    id: product.id

                }
            })
            setProducts(allPost)
            // console.log(allPost)
        })
    })
    return (
        <Container fluid className='students bg-light'>
            <div className='listStudents'>
                <FontAwesomeIcon icon={faGraduationCap} />
                <h3>
                    PLACED STUDENTS
                </h3>
            </div>
            <Row>
    {products.slice(0,8).map(Students => {
        
        return <Col s={12} md={6} xl={3} className='cardcc'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={Students.url} className='studentsCompaineImag' />
                <Card.Body>
                    <Card.Title>{Students.firstName} {Students.lastName}</Card.Title>
            </Card.Body>
                
                <ListGroup className="list-group-flush">
                    <ListGroup.Item >{Students.department}</ListGroup.Item>
                    <ListGroup.Item >{Students.semester}</ListGroup.Item>
                    <ListGroup.Item >CGPA:{Students.cgpa}</ListGroup.Item>
                    <ListGroup.Item >{Students.status }</ListGroup.Item>
                </ListGroup>
            </Card>

        </Col>
    })}
        
    </Row>
    <div class="col-12 pl-5 pt-4">
                <p><Link to='/PlacedStudentsList'>More Placed Students-</Link></p>
            </div>
            <hr />
        </Container>
    )
}

export default Students
