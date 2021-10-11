
import { Navbar, Container, Nav,Button}from 'react-bootstrap';







  

const NavBar=  (props) => {

 

 

 

    return(
      
        <div>
   <Navbar bg="dark" >
  <Container>
    <Navbar.Brand href="#home">
      <img
        src="/logo.png"
        width="170"
        height="70"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Nav className="justify-content-end" activeKey="/home" >
    <Nav.Item className="ml-3" style={{ marginRight:'10px'}}>
    <Button variant="primary" className="btn-color mr-3" >Get Email Updates</Button>{' '}
    </Nav.Item>
  
    <Nav.Item style={{ marginRight:'10px'}}>
    <Button variant="outline-light" >  <img src="./discord.png" style={{ width:'1.2rem'}} className="" alt='Discord logo'></img></Button>{' '}
    </Nav.Item>
   
    <Nav.Item>
    <Button variant="outline-light" >  <img src="./twitter.png" style={{ width:'1.2rem'}} className="" alt='twitter logo'></img></Button>{' '}
    </Nav.Item>
  </Nav>
  </Container>
  </Navbar>
</div>
    )



}

export default NavBar;