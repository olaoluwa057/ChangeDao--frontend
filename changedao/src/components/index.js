import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Container, Row,Button,Col }from 'react-bootstrap';


import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
 



  

  return (
    <div>
      <ToastContainer />
      <div className='bg-landing '>
      <Container fluid="md" >
        <Row>
            <Col className='primary-text ' md={{ span: 10, offset: 1 }}  style={{marginTop:'150px'}}>
                    <div>NFTs AS A</div> <div> FORCE FOR CHANGE</div>
            </Col>
        </Row>
        <Row>
            <Col className='secondary-text' md={{ span: 4, offset: 1 }} >
                    <div> Discover, Create, and Support</div> <div>  Stories of Change</div>
                   
            </Col>
        </Row>
        <Row>
            <Col className='third-text' md={{ span: 4, offset: 5 }} style={{marginTop:'100px'}}>
                    <div> JOIN OUR STORY + STAY CONNECTED </div>
            </Col>
            
        </Row>
       <Row style={{marginTop:'10px',width:'800px'}}>
       <Col>
       <Button variant="outline-light">Discord</Button>{' '}
    </Col>
    <Col >
    <Button variant="outline-light">Twitter</Button>{' '}
    </Col>
    <Col >   <Button variant="primary" className="btn-color " >Get Email Updates</Button>{' '}
    </Col>
       </Row>
   

        </Container>

      </div>
    </div>
  )
}

export default Home;