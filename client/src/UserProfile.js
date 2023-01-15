import './UserProfile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function User() {

        const [userdata, setdata] = useState();

        const params = useParams()
        console.log(params)
        useEffect(() => {fetch(`http://localhost:3001/api/v1/user/${params.username}`)
            .then((response) => response.json())
                .then((data) => setdata(data)); }, [params]);

        const info = userdata.data;
            return (
                <Container className='window m-0 p-0' fluid>
                    <Row>
                        <Col>
                            <h1>{info.username}</h1>
                        </Col>
                    </Row>
                </Container>
            )
        
        }
    


export default User