
import { Navbar, Form, Nav,Button, Modal}from 'react-bootstrap';
import"../components/css/Nav.css"
import React from 'react';
import MyVerticallyCenteredModal from "./form";
import { NavLink } from 'react-router-dom';








  

const NavBar=  (props) => {

  const [modalShow, setModalShow] = React.useState(false);



 

 

 

    return(
      
        <div>
   <Navbar bg="dark"  expand="lg"  style={{paddingLeft:'20px', paddingRight:'20px'}}>

   <NavLink to="/"> <Navbar.Brand>
      <img
        src="/logo.png"
        width="170"
        height="70"
        className="d-inline-block align-top"
        alt="ChangeDao logo"
      />
    </Navbar.Brand></NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <Nav.Link href="#link">
       <Button variant="primary" className="btn-color mr-3" style={{height:'3rem'}}  onClick={() => setModalShow(true)}>Get Email Updates</Button>{' '}
      </Nav.Link>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <Nav.Link href="https://discord.gg/mHSnHctCAV">
       <Button variant="outline-light" >  <img src="./discord.png" style={{ width:'2rem'}} className="" alt='Discord logo'></img></Button>{' '}
        
        </Nav.Link>
        <Nav.Link href="https://twitter.com/ChangeDAO">
         <Button variant="outline-light" >  <img src="./twitter.png" style={{     width:'2rem'}} className="" alt='twitter logo'></img></Button>{' '}
        </Nav.Link>
        <Nav.Link href="https://docs.changedao.org/">
         <Button variant="outline-light" >  <img src="./information.png" style={{     width:'2rem'}} className="" alt='information logo'></img></Button>{' '}
        </Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
 
  </Navbar>
</div>
    )



}

export default NavBar;