import './UserProfile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component } from 'react';
import { Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';



class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        console.log(this.props.username)
        fetch(`http://localhost:3001/api/v1/user/tuser`)
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
                            <h1></h1>
                        </Col>
                    </Row>
                </Container>
            )
        
    }
}

export default User