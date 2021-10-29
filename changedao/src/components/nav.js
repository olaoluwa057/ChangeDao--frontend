
import { Navbar, Form, Nav,Button, Modal}from 'react-bootstrap';
import"../components/css/Nav.css"
import React from 'react';






function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter Email 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <Form action="https://getform.io/f/8df1758c-95fd-4083-bce7-251687f53a24" method="POST">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" namw='email update' />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Send me Update monthly" />
  </Form.Group>

  <div className='text-center'>
       
   <Button variant="primary" size="lg" type='submit' className='mt-2 giv-btn1' style={{ textAlign:'center'}}>
     Submit Your Story
    </Button>{' '}
       </div>
  </Form>
      </Modal.Body>
     
    </Modal>
  );
}

  

const NavBar=  (props) => {

  const [modalShow, setModalShow] = React.useState(false);



 

 

 

    return(
      
        <div>
   <Navbar bg="dark"  expand="lg"  style={{paddingLeft:'20px', paddingRight:'20px'}}>

    <Navbar.Brand href="#home">
      <img
        src="/logo.png"
        width="170"
        height="70"
        className="d-inline-block align-top"
        alt="ChangeDao logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <Nav.Link href="#link">
       <Button variant="primary" className="btn-color mr-3"  onClick={() => setModalShow(true)}>Get Email Updates</Button>{' '}
      </Nav.Link>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <Nav.Link href="https://discord.gg/mHSnHctCAV">
       <Button variant="outline-light" >  <img src="./discord.png" style={{ width:'1.2rem'}} className="" alt='Discord logo'></img></Button>{' '}
        
        </Nav.Link>
        <Nav.Link href="https://twitter.com/ChangeDAO">
         <Button variant="outline-light" >  <img src="./twitter.png" style={{     width:'1.2rem'}} className="" alt='twitter logo'></img></Button>{' '}
        </Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
 
  </Navbar>
</div>
    )



}

export default NavBar;