import './Article.css';
import { Container, Row, Col} from 'react-bootstrap';
import { Component } from 'react';
import Loading from './Loading';


class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: [],
      dataLoaded: false
    }
  }


  componentDidMount() {
    fetch('https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=527', {
        accept: '*/*',
      })
          .then((response) => response.json())
          .then((data) => {
            
            this.setState({article: data['Result']['Resources']['Resource'][0],
          dataLoaded: true});
          })
          .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
          })
        }
        

  componentWillUnmount() {
    
  }

    render() {

    /*
        Users.map((user, i) =>
            <MenuItem eventKey=[i]>User.firstname[i]</MenuItem>)
    */
      const sub = 'subheader'
      const con = 'content'
      if (!this.state.dataLoaded) {
        return (
          <Container className='window m-0 p-0 h-100' fluid>
              <Row>
                  <Col>
                    <Loading/>
                  </Col>
              </Row>
          </Container>
        )
      } else {
        return (
          <Container className='window m-0 p-0 h-100 w-100' fluid>
              <Row>
                  <Col className='justify-content-center mx-auto text-center h-auto col-10'>
                    <h1>{this.state.article.Title}</h1>
                  </Col>
              </Row>
              <Row className='h-100'>
                <Col>
                  <div className='w-75 mx-auto'>
                    <div>
                      {
                        this.state.article.Sections.section.map((section, i) => (
                          <div>
                            <h3 key={sub + i}>
                              {section.Title}
                            </h3><br /><br />
                            <p key={con + i}>
                              {section.Content.replace(/<[^>]+>/g, '')}
                            </p>
                          </div>
                          )
                        )
                      }
                    </div>
                  </div>
                </Col>
              </Row>
          </Container>
        )
      }
    }
}

export default Article

