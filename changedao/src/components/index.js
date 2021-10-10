import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Container, Row,Button,Col,Stack }from 'react-bootstrap';


import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
 


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
       <Row style={{marginTop:'10px',width:'800px', marginLeft:'200px', marginTop:'30px'}}>
       <Col>
       <Button variant="outline-light" style={{width:'200px'}}> <img src="./discord.png" style={{ width:'1.2rem',marginRight:'1rem'}} className="" alt='Discord logo'></img>Discord</Button>{' '}
    </Col>
    <Col >
    <Button variant="outline-light" style={{width:'200px'}}>  <img src="./twitter.png"  style={{ width:'1.2rem',marginRight:'1rem'}} className="" alt='twitter logo'></img>Twitter</Button>{' '}
    </Col>
    <Col >   <Button variant="primary" className="btn-color " style={{width:'200px'}}>Get Email Updates</Button>{' '}
    </Col>
       </Row>
        </Container>
      </div >
    
      <div className="section" style={{marginTop:'0'}}>
      <ColoredLine color='#FFFFFF' style={{height:'0.5px !important'}}/>
      </div>

      {/*New section*/}
      <div className="section2" >
      <Container>
      <h1 className='text-header col-md-7 mx-auto'>We’re Introducing Triple P NFTs</h1>
      <Row className='mt-5'>
      <Col>
      <div className='header-text'>
      PEOPLE
      </div>
      <div className='text-style' style={{width:'300px'}}>
      Create to your heart’s delight.
      </div>
      <p style={{color:'white', width:'300px'}} className='mt-5'>Every NFT on ChangeDAO benefits a cause. Elevate and educate our 
        community about the cause you care about with your art. Create change, start a movement.</p>
      </Col>
      
      <Col>
      <div className="vr"/>
      </Col>
     
    
      <Col>
      <div className='header-text'>
      PROFIT
      </div>
      <div className='text-style' style={{width:'300px'}}>
      We’re all in this together
      </div>
      <p style={{color:'white', width:'300px'}} className='mt-5'>Our smart contracts are unique to the Changemaker — and to each individual project. Changemakers determine how revenue from sales is distributed. And our platform fees are lower than you think.</p>
      </Col>
        
      <Col>
      <div className="vr"/>
      </Col>
      <Col>
      <div className='header-text'>
    PLANET
      </div>
      <div className='text-style' style={{width:'300px'}}>
      Reduce and offset
      </div>
      <p style={{color:'white', width:'300px'}} className='mt-5'>We’re taking sustainability head-on, crafting quality code that reduces overall energy consumption. And ChangeDAO will acquire carbon offsets to cover what little energy we do use to bring change to life.</p>
      </Col>
      </Row>

       </Container>

      </div>

       {/*New section*/}

       <div className='section3' >
       <Row className="justify-content-md-center mx-auto" >
      <Col md="auto" >
      <h4 className='text-styling'>Join Our Story On     <Button variant="outline-light" style={{width:'200px'}}> <img src="./discord.png" style={{ width:'1.2rem',marginRight:'1rem'}} className="" alt='Discord logo'></img>Discord</Button>{' '}</h4>
      </Col>
      </Row>
       </div>

     

       {/*New section*/}
    
     
         <Stack gap={2} className="col-md-12 mx-auto section4" style={{textAlign:'center'}}>
          <div>
         <h1 className='text-header' >NFTs as a Force for Change</h1>
       </div>
       <div>
         <p className='styling mt-5'>
        <span style={{fontWeight:'bold'}}> Changemakers </span> create positive change in the world
         </p>
         <p className='styling ' style={{marginTop:'-10px'}}>
        <span style={{fontWeight:'bold'}}> Art  </span> inspires and educates us to participate
         </p>
         <p className='styling' style={{marginTop:'-10px'}}>
         <span style={{fontWeight:'bold'}}>  Community  </span>makes change happen as one global movement
         </p>
       </div>
    </Stack>
    {/*New section*/}
    <div>
    <img src="./bg2.jpg" style={{ width:'100%'}} className="" alt='ChangeDao-Journey'></img>
    </div>
   {/*New section*/}
   <div className='section6'>
<Container >
<Row >
    <Col style={{marginTop:'120px'}}>
    <Stack  gap={5}>
 <h2 className= 'styling'>Are you a Changemaker? </h2>
 <p style={{color:'white'}}>Changemakers are hand-selected and verified by our core team. They are artists, causes and curators that have a track-record of using NFTs as a force for change in the world</p>
<p style={{color:'white'}}>Want to get involved? Connect with our team today.</p>
<div>
    <Button variant="outline-light" style={{width:'200px', marginRight:'15px'}}  > <img src="./discord.png" style={{ width:'1.2rem',marginRight:'1rem'}} alt='Discord logo'></img>Discord</Button>{' '}
    <Button variant="primary" className="btn-color " style={{width:'200px'}}>Message Us</Button>{' '}
</div>
</Stack>
    </Col>
    <Col style={{marginTop:'120px'}}>
    <img src="./SplitPay.png" style={{ width:'100%'}} className="" alt='ChangeDao-Journey'></img>
    </Col>
  </Row>
</Container>
   </div>
      </div>
     
  
  )
}

export default Home;