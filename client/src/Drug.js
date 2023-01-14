import './Drug.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './logo.svg';
import BarGraph1 from './Bar-graph';
import PieGraph1 from './Pie-chart';
import SearchBar from './Drug-search-bar';

function Drug() {
    
    const [foundAdverseEvents, setAdverseEvents] = useState({
        "ade": ["ONE", "TWO", "THREE", "FOUR", "FIVE"], 
        "amount": [100,200,300,400,500]
    })
    const [foundTest, setTest] = useState({})

    useEffect(() => {
        console.log('foundAdverseEvents within Drug.js', foundAdverseEvents)
    }, [foundAdverseEvents])

    return (
        <Container style={{ 
            backgroundImage: `url("/Drug.svg")` 
            }}>
            <Col className='p-0 ms-2 mt-2'>
                
            </Col>
            <Col>
                <Row>
                    <Row>
                        <h1>DRUG SEARCHER</h1>
                        
                    </Row>
                    <Row>
                        <SearchBar setAdverseEvents={setAdverseEvents} setTest={setTest} />
                    </Row>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Row>
                        <Col>
                            <BarGraph1 />
                        </Col>
                        <Col>
                            <PieGraph1 foundAdverseEvents={foundAdverseEvents} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
                            </h2>
                        </Col>
                    </Row>
                    
                </Row>
            </Col>
        </Container>
    )
}

export default Drug