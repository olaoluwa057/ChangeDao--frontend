import "./css/Footer.css"
import { Navbar, Container, Row,Button,Col,Stack }from 'react-bootstrap';
import MyVerticallyCenteredModal from "./form";
import React from 'react';
import { NavLink } from "react-router-dom";



{/***************************************************************Footer***********************************************************************/}


const Footer=  (props) => {
  const [modalShow, setModalShow] = React.useState(false);


    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1,
                marginTop:0
            }}
        />
    );


return(
    <div className='footer'>
 
    
<div  className='order'>
  <div>
      <Navbar.Brand href="#home">
        <img
          src="/logo.png"
          width="170"
          height="70"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <div style={{marginLeft:'25px'}}>
      <NavLink to="/interest"><Button variant="outline-light" style={{width:'170px'}} className='btn-about'>Message Us</Button>{' '}</NavLink>
      </div>
  </div>

  <div className='arrange '>
 <Button variant="primary"  style={{width:'200px'}} className='mt-3 btn-color ' onClick={() => setModalShow(true)} >Get Email Updates</Button>{' '}
<Button variant="outline-light" style={{width:'200px', whiteSpace:'nowrap'}} className='mb-6 nb btn-1 ' href="https://discord.gg/mHSnHctCAV"> <img src="./discord.png" style={{ width:'1.2rem',marginRight:'1rem'}} alt='Discord logo'></img>Discord</Button>{' '}
<Button variant="outline-light" style={{width:'200px', whiteSpace:'nowrap'}} className='mb-6 nb btn-1 ' href="https://twitter.com/ChangeDAO" > <img src="./twitter.png" style={{ width:'1.2rem',marginRight:'1rem'}} alt='Twitter logo'></img>Twitter</Button>{' '}

</div>

<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />



</div>


  
   
     
  



<div className="section" style={{marginTop:'25px'}}>
    <ColoredLine color='#FFFFFF' style={{height:'0.5px !important'}}/>
    </div>

  <Stack direction="horizontal" gap={3}>
<div className="color-white mt-5" style={{fontSize:'smaller'}}>© Copyright 2021 ChangeDAO LLC. All rights reserved.</div>
<div className="color-white ms-auto mt-5" style={{fontSize:'smaller'}}>Privacy</div>
<div className="color-white mt-5" style={{fontSize:'smaller'}}>Terms</div>
</Stack>
 


</div>
)












}
export default Footer;
