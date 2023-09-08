import React, { useEffect, useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { FirebaseContext } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom'
import "./Companies.css"
function Companies() {
    const Navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        firebase.firestore().collection('Companies').get().then((snapshot) => {
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
        <div class="container-fluid col-xl-12  bg-light ">
            <div class="listCompany pt-4">
                <FontAwesomeIcon icon={faBuilding} />

                <h3>
                    LIST OF COMPANIES
                </h3>
                <FontAwesomeIcon onClick={() => {
                    Navigate('/signup')
                }} icon={faPlus} />
            </div>
            <div className="row   pt-2 pl-5">
                {products.slice(0,8).map(Companies => {

                    return <div className='col-12 col-md-6 col-xl-3 pt-4 card-body '>
                        <Card style={{ width: '22rem', height: '30em' }} >
                        <Card.Img style={{ width: '13rem', height: '10em' }} className='pt-5 pb-3'  variant="top"  src={Companies.url} alt="Companies Photo"/>
                        <Card.Body style={{ width: '14rem'}} className='pt-5'>
                          <Card.Title>{Companies.companiename}</Card.Title>
                          <Card.Text className='Card-text'>
                          {Companies.details}
                          </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush pt-5">
                          <ListGroup.Item>{Companies.HRname}</ListGroup.Item>
                          <ListGroup.Item>{Companies.mail}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body className='Card-link'style={{ width: '19rem'}} >
                          <Card.Link href="#">Apply Link</Card.Link>
                          <Card.Link href="#">Career Link</Card.Link>
                        </Card.Body>
                        </Card>
                    </div>
                })}

            </div>

            <div class="col-12 pl-5 pt-4">
                <p><Link to='/allCompaniesList'>More Companies Details-</Link></p>
            </div>




        </div>


    )
}

export default Companies
