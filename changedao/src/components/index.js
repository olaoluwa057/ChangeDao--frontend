

import { Navbar, Container, Row,Button,Col,Stack }from 'react-bootstrap';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


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
 
  {/*Landing Page section Hero page... */}    

      <div className='bg-landing position '>

        <Row className='primary-txt'>
            <Col className='primary-text '>
                    <div>NFTs AS A</div> <div> FORCE FOR CHANGE</div>
            </Col>
        </Row>

        <Row className='primary-txt'>
            <Col className='secondary-text'>
                    <div> Discover, Create, and Support</div> <div>  Stories of Change</div>
                   
            </Col>
        </Row>


        <div className='center third-text' style={{marginTop:'10vw'}} >
                    <div> JOIN OUR STORY + STAY CONNECTED </div>
           
        </div>
        <div style={{marginTop:'5vw'}} className='center box'>
       <Button variant="outline-light" style={{width:'17vw', whiteSpace:'nowrap'}} className="btn1">  <img src="./discord.png" alt='Discord logo'  style={{ width:'1.2rem',marginRight:'1vw'}} ></img>Discord</Button>{' '}
        <Button variant="outline-light" style={{width:'17vw', whiteSpace:'nowrap'}} className="btn1">  <img src="./twitter.png"  style={{ width:'1.2rem',marginRight:'1vw'}} alt='twitter logo'></img>Twitter</Button>{' '}
      <Button variant="primary" className="btn-width btn-color" style={{width:'17vw', whiteSpace:'nowrap'}}>Get Email Updates</Button>{' '}
   
       </div>
      

      </div >
 
  {/*section division*/}  

    
      <div className="section " style={{marginTop:'0'}}>
      <ColoredLine color='#FFFFFF' style={{height:'0.5px !important'}}/> {/*this handle white horizontal line */}  
      </div>

      {/*People, profile planet section, note that the class border left handles  purple horizonal line*/}
      <div className="section2 pt-5" >
    
     <h1 className='text-head color-white '>We’re Introducing Triple P NFTs</h1>
    
         <div className='justify-content-md-center mx-auto dots'>
      <span class="dot "></span>
<span class="dot ml-2 mr-2"></span>
<span class="dot"></span>

      </div>

     <div className='cons mt-5'>
     
<div className='width-control'>
 <div className='header-text' >
      PEOPLE
  </div>

  <div className='text-style' style={{width:'100%'}}>
      Create to your heart’s delight.
      </div>
      <p style={{color:'white', width:'100%', fontSize:'1.2vw'}} className='mt-4 p-tag col-md-7 mx-auto'>Every NFT on ChangeDAO benefits a cause. Elevate and educate our 
        community about the cause you care about with your art. Create change, start a movement.
        </p>
  </div>

  <div className='border-left'>
 </div>
  
<div className='extra-pad'>

     <div className='header-text' >
      PROFIT
      </div>
      <div className='text-style' style={{width:'100%'}}>
       We’re all in this together
      </div>
      <p style={{color:'white',width:'100%', fontSize:'1.2vw'}} className='mt-4 p-tag col-md-7 mx-auto'>Our smart contracts are unique to the Changemaker — and to each individual project. Changemakers determine how revenue from sales is distributed. And our platform fees are lower than you think.</p>
    
      </div>
    
   
  
  
  <div className='border-left'>
 </div>

 
   <div className='width-control '>
   
      <div className='header-text'>
       PLANET
      </div>
      <div className='text-style' style={{width:'100%'}}>
      Reduce and offset
      </div>
      <p style={{color:'white', width:'100%', fontSize:'1.2vw'}} className='mt-4 p-tag col-md-7 mx-auto pl-2'>We’re taking sustainability head-on, crafting quality code that reduces overall energy consumption. And ChangeDAO will acquire carbon offsets to cover what little energy we do use to bring change to life.</p>
  
     </div>


  
     </div>

   

      </div>

     
 {/*Join our story section*/}

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
         <h1 className='text-head color-white mt-5' >NFTs as a Force for Change</h1>
         <div className='justify-content-md-center mx-auto dots'>
      <span class="dot "></span>
<span class="dot ml-2 mr-2"></span>
<span class="dot"></span>

      </div>
       </div>
       <div className='mt-5'>
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
    <Col style={{marginTop:'50px'}}>
    <Stack  gap={5 } className='mgt'>
 <h2 className= 'styling'>Are you a Changemaker? </h2>
 <p style={{color:'white'}}>Changemakers are hand-selected and verified by our core team. They are artists, causes and curators that have a track-record of using NFTs as a force for change in the world</p>
<p style={{color:'white'}}>Want to get involved? Connect with our team today.</p>
<div>
<Button variant="outline-light" style={{width:'13vw', whiteSpace:'nowrap'}} className="btn1">  <img src="./discord.png" alt='Discord logo'  style={{ width:'1.2rem',marginRight:'1vw'}} ></img>Discord</Button>{' '}
    <Button variant="primary" className="btn-color mg-t " style={{minWidth:'13vw'}}>Message Us</Button>{' '}
</div>
</Stack>
    </Col>
    <Col style={{marginTop:'120px'}} className='ChangeDao-Journey mb-5'>
    <img src="./SplitPay.gif" style={{ width:'100%'}} className="" alt='ChangeDao-Journey'></img>
    </Col>
  </Row>
</Container>
   </div>

      {/*New section*/}
    <div className='section7'>
     
      <h1 className='text-head color-white mt-5' >Meet the Core Team </h1>
     
     
      <span className='color-white' style={{ fontStyle:'italic'}}>Public, Proven and Trusted</span>
      <div className='justify-content-md-center mx-auto dots'>
      <span class="dot "></span>
<span class="dot ml-2 mr-2"></span>
<span class="dot"></span>

      </div>
      <div>
     


        <div class="wrapper-grid">

        <div class="containe ">
  
      <img src='./images/All.png' alt='David All ' class="profile-img"/>
      <h1 class="name color-white">David All </h1>
      <p class="description" style={{color: 'white', fontWeight:'lighter'}}>Founder, <br />Changemaker  </p>
      
   
    </div>
    <div class="containe">
  
  <img src="./images/Hanaya.png" alt='Hanaya Brasali' class="profile-img"/>
  <h1 class="name color-white">Hanaya Brasali</h1>
  <p class="description" style={{color: 'white', fontWeight:'lighter'}}> Community Lead </p>
  

</div>

<div class="containe">
  
  <img src="./images/Bryan.png" alt='Bryan Brinkman' class="profile-img"/>
  <h1 class="name color-white">Bryan Brinkman</h1>
  <p class="description" style={{color: 'white', fontWeight:'lighter'}}>Artist Relations </p>
  

</div>

<div class="containe">
  
  <img  src="./images/Dinkleman.png" alt='Jeff Dinkelman' class="profile-img"/>
  <h1 class="name color-white">Jeff Dinkelman</h1>
  <p class="description" style={{color: 'white', fontWeight:'lighter'}}>Full-Stack Developer </p>

</div>

<div class="containe">
  
  <img src="./images/Kelsey.png" alt='Kelsey Driscoll' class="profile-img"/>
  <h1 class="name color-white">Kelsey Driscol</h1>
  <p class="description" style={{color: 'white', fontWeight:'lighter'}}>Changemaker Lead</p>
  

</div>
<div class="containe">
  
  <img src="./images/Morrison.png" alt='Kay Morrison' class="profile-img" />
  <h1 class="name color-white">Kay Morrison</h1>
  <p class="description" style={{color: 'white', fontWeight:'lighter'}}> Operations Lead </p>

</div>
<div class="containe">
  
  <img src="./images/Upapong.png" alt='JPeter Upapong' class="profile-img" />
  <h1 class="name color-white">Peter Upapong</h1>
  <p class="description" style={{color: 'white', fontWeight:'lighter'}}> Platform Lead </p>

  

</div>

<div class="containe">
  
  <img src="./images/Dale.png" alt='Stephanie Dale' class="profile-img" />
  <h1 class="name color-white">Stephanie Dale</h1>
  <p class="description" style={{color: 'white', fontWeight:'lighter'}}> Art Director, Designer </p>

  

</div>
<div class="containe visibility">
  
  <img src="./images/Morrison.png" alt='Kay Morrison'  class="profile-img"/>
  <h1 class="name color-white">Hanaya Brasali</h1>
  <p class="description" style={{color: 'white', fontWeight:'lighter'}}> Community Lead </p>

  

</div>


        </div>


             

 
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
              <Button variant="outline-light" style={{width:'200px'}} className='mt-3' > <img src="./discord.png" style={{ width:'1.2rem',marginRight:'1rem'}} className="" alt='Discord logo'></img>Discord</Button>{' '}
            </Col>
            <Col >
            <Button variant="outline-light" style={{width:'200px'}} className='mt-3'>  <img src="./twitter.png"  style={{ width:'1.2rem',marginRight:'1rem'}} className="" alt='twitter logo'></img>Twitter</Button>{' '}
            </Col>
            <Col > 
              <Button variant="primary" className="btn-color2 mt-3" style={{width:'200px'}}>Get Email Updates</Button>{' '}
              </Col>
      </Row>
    </Col>
   </Row>
  </div>
  <div className='sectionDiv'/>






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
        <Button variant="outline-light" style={{width:'170px'}} className='btn-about'>About Us</Button>{' '}
        </div>
    </div>
 
    <div className='arrange '>
   <Button variant="primary"  style={{width:'200px'}} className='mt-3 btn-color ' >Get Email Updates</Button>{' '}
  <Button variant="outline-light" style={{width:'200px', whiteSpace:'nowrap'}} className='mb-6 nb btn-1 ' > <img src="./discord.png" style={{ width:'1.2rem',marginRight:'1rem'}} className="" alt='Discord logo'></img>Discord</Button>{' '}
  <Button variant="outline-light" style={{width:'200px', whiteSpace:'nowrap'}} className='mb-6 nb btn-1 ' > <img src="./twitter.png" style={{ width:'1.2rem',marginRight:'1rem'}} className="" alt='Twitter logo'></img>Twitter</Button>{' '}
  
  </div>
  



  </div>
 
  
    
     
       
    



<div className="section" style={{marginTop:'25px'}}>
      <ColoredLine color='#FFFFFF' style={{height:'0.5px !important'}}/>
      </div>

    <Stack direction="horizontal" gap={3}>
  <div className="color-white mt-5" style={{fontSize:'smaller'}}>© Copyright 2021 Mount Change LLC. All rights reserved.</div>
  <div className="color-white ms-auto mt-5" style={{fontSize:'smaller'}}>Privacy</div>
  <div className="color-white mt-5" style={{fontSize:'smaller'}}>Terms</div>
</Stack>
   
 

  </div>









    </div>

   
     
  
  )
}

export default Home;