import './UserProfile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component } from 'react';
import { Card } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';


const Username = () => {
    const username = useSearchParams().get('username');
    return username
} 

const username = Username

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/v1/user/${username}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({user: data});
            })

    }

    
    componentWillUnmount() {
        
    }

    render() {
        

            return (
                <Container className='window m-0 p-0' fluid>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            )
        
    }
}

export default User