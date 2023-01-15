import './UserProfile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component } from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {

        fetch(`http://localhost:3001/api/v1/user/${this.props.username}`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({user: data})
        })
    }
    
      componentWillUnmount() {
        
      }


    render() {
        

            return (
                <Container className='window m-0 p-0' fluid>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <h1>{this.state.user}</h1>
                                </Card.Header>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )
        
    }
}

export default User