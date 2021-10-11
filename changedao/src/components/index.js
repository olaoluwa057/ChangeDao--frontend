

import { Navbar, Container, Row,Button,Col,Stack }from 'react-bootstrap';


import { ToastContainer,} from 'react-toastify';

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
       <Row style={{width:'800px', marginLeft:'200px', marginTop:'40px'}}>
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

      {/*New section*/}
    <div className='section7'>
      <h1 className='text-head color-white mt-5' >Meet the Core Team </h1>
      <span className='color-white' style={{ fontStyle:'italic'}}>Public, Proven and Trusted</span>
      <div>
        <Container>
              <Row className="mt-5">
                <Col>
                <img src="./images/All.png" alt='David All' />
                <p style={{fontWeight:'bold', color:'white', textAlign:'center'}}>David All</p>
                <p style={{color: 'white', fontWeight:'lighter', textAlign:'center', marginTop:'-15px'}}>Founder,Changemaker </p>
                </Col>

                <Col>
                <img src="./images/Hanaya.png" alt='Hanaya Brasali' />
                <p style={{fontWeight:'bold', color:'white', textAlign:'center'}}>Hanaya Brasali</p>
                <p style={{color: 'white', fontWeight:'lighter', textAlign:'center', marginTop:'-15px'}}>Community Lead</p>
                </Col>

                <Col>
                <img src="./images/Bryan.png" alt='Bryan Brinkman' />
                <p style={{fontWeight:'bold', color:'white', textAlign:'center'}}>Bryan Brinkman</p>
                <p style={{color: 'white', fontWeight:'lighter', textAlign:'center', marginTop:'-15px'}}>NFT Artist Relations</p>
                </Col>
                </Row>
                <Row>
                <Col>
                <img src="./images/Dale.png" alt='Stephanie Dale' />
                <p style={{fontWeight:'bold', color:'white', textAlign:'center'}}>Stephanie Dale</p>
                <p style={{color: 'white', fontWeight:'lighter', textAlign:'center', marginTop:'-15px'}}>Art Director, Designer </p>
                </Col>

                <Col>
                <img src="./images/Dinkleman.png" alt='Jeff Dinkelman' />
                <p style={{fontWeight:'bold', color:'white', textAlign:'center'}}>Jeff Dinkelman</p>
                <p style={{color: 'white', fontWeight:'lighter', textAlign:'center', marginTop:'-15px'}}>Full-Stack Developer</p>
                </Col>

                <Col>
                <img src="./images/Kelsey.png" alt='Kelsey Driscoll' />
                <p style={{fontWeight:'bold', color:'white', textAlign:'center'}}>Kelsey Driscoll</p>
                <p style={{color: 'white', fontWeight:'lighter', textAlign:'center', marginTop:'-15px'}}>Changemaker Lead</p>
                </Col>
                </Row>
                <Row>
                <Col>
                <img src="./images/Morrison.png" alt='Kay Morrison' />
                <p style={{fontWeight:'bold', color:'white', textAlign:'center'}}>Kay Morrison</p>
                <p style={{color: 'white', fontWeight:'lighter', textAlign:'center', marginTop:'-15px'}}>Operations Lead</p>
                </Col>

                <Col>
                <img src="./images/Upapong.png" alt='JPeter Upapong' />
                <p style={{fontWeight:'bold', color:'white', textAlign:'center'}}>JPeter Upapong</p>
                <p style={{color: 'white', fontWeight:'lighter', textAlign:'center', marginTop:'-15px'}}>NFT Platform Lead</p>
                </Col>
                
                <Col className='visibility'>
                <img src="./images/.png" alt='...' />
                <p style={{fontWeight:'bold', color:'white', textAlign:'center'}}></p>
                <p style={{color: 'white', fontWeight:'lighter', textAlign:'center', marginTop:'-15px'}}></p>
                </Col>
                </Row>
          </Container>
          <p style={{fontSize:'30px', fontStyle:'italic', color:'white', textAlign:'center' ,marginTop:'15px'}}> Find us all on Discord!
          <Button variant="outline-light" style={{marginLeft:'20px'}} >  <img src="./discord.png" style={{ width:'1.2rem'}} className="" alt='Discord logo'></img></Button>{' '}
          </p>
          
      </div>
    
    </div>

    <div className='section8'>
    <Row className="justify-content-md-center mx-auto" >
      <Col md="auto">
          <h4 className='text-styling'style={{fontWeight:'bold'}}>Let’s Connect IRL at NFT.nyc</h4>
          <p style={{fontSize:'25px', fontWeight:'lighter'}} className='color-white'>But you can join our story today. </p>

        <Row className='mt-5'>
            <Col>
              <Button variant="outline-light" style={{width:'200px'}}> <img src="./discord.png" style={{ width:'1.2rem',marginRight:'1rem'}} className="" alt='Discord logo'></img>Discord</Button>{' '}
            </Col>
            <Col >
            <Button variant="outline-light" style={{width:'200px'}}>  <img src="./twitter.png"  style={{ width:'1.2rem',marginRight:'1rem'}} className="" alt='twitter logo'></img>Twitter</Button>{' '}
            </Col>
            <Col > 
              <Button variant="primary" className="btn-color2 " style={{width:'200px'}}>Get Email Updates</Button>{' '}
              </Col>
      </Row>
    </Col>
   </Row>
  </div>
  <div className='sectionDiv'/>

  <div className='footer'>
    <Container>
    <Stack direction="horizontal" gap={3} >
  <div  className='mt-5'>
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
    <Button variant="outline-light" style={{width:'170px'}}>About Us</Button>{' '}
    </div>
  </div>
  <div className='ms-auto mt-5'>  <Button variant="primary" className="btn-color  " style={{width:'200px'}}>Get Email Updates</Button>{' '}</div>
  <div className="mt-5"> <Button variant="outline-light" style={{width:'200px'}}> <img src="./discord.png" style={{ width:'1.2rem',marginRight:'1rem'}} className="" alt='Discord logo'></img>Discord</Button>{' '}</div>
  <div className="mt-5"> <Button variant="outline-light" style={{width:'200px'}}> <img src="./twitter.png" style={{ width:'1.2rem',marginRight:'1rem'}} className="" alt='Twitter logo'></img>Twitter</Button>{' '}</div>
</Stack>

<div className="section" style={{marginTop:'25px'}}>
      <ColoredLine color='#FFFFFF' style={{height:'0.5px !important'}}/>
      </div>

    <Stack direction="horizontal" gap={3}>
  <div className="color-white mt-5" style={{fontSize:'smaller'}}>© Copyright 2021 Mount Change LLC. All rights reserved.</div>
  <div className="color-white ms-auto mt-5" style={{fontSize:'smaller'}}>Privacy</div>
  <div className="color-white mt-5" style={{fontSize:'smaller'}}>Terms</div>
</Stack>
    </Container>
 

  </div>










    </div>


     
  
  )
}

export default Home;