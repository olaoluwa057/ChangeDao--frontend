
import { Navbar, Container, Nav,Button}from 'react-bootstrap';







  

const NavBar=  (props) => {

 

 

 

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
       <Button variant="primary" className="btn-color mr-3" >Get Email Updates</Button>{' '}
      </Nav.Link>
        <Nav.Link href="#home">
       <Button variant="outline-light" >  <img src="./discord.png" style={{ width:'1.2rem'}} className="" alt='Discord logo'></img></Button>{' '}
        
        </Nav.Link>
        <Nav.Link href="#link">
         <Button variant="outline-light" >  <img src="./twitter.png" style={{     width:'1.2rem'}} className="" alt='twitter logo'></img></Button>{' '}
        </Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
 
  </Navbar>
</div>
    )



}

export default NavBar;