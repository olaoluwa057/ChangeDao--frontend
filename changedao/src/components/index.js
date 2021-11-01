

import { Navbar, Container, Row,Button,Col,Stack,Nav }from 'react-bootstrap';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
 import Video from "./videos/vid.mp4"
 import "../components/css/landing.css"
 import { NavLink, useHistory } from 'react-router-dom';



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
                    <p>NFTs AS A</p> <p className='mt-n'>FORCE FOR CHANGE</p>
            </Col>
        </Row>

        <Row className='primary-txt'>
            <Col className='secondary-text'>
                    <div className='mt-n1'> Discover, Create, and Support</div> <div>  Stories of Change</div>
                   
            </Col>
        </Row>


        <div className='center third-text' style={{marginTop:'12vh'}} >
                    <div> JOIN OUR STORY + STAY CONNECTED </div>
           
        </div>
        <div style={{marginTop:'3vh'}} className='center box'>
       <Button variant="outline-light" style={{width:'17vw', whiteSpace:'nowrap'}} className="btn1" href="https://discord.gg/mHSnHctCAV">  <img src="./discord.png" alt='Discord logo'  style={{ width:'1.2rem',marginRight:'1vw'}} ></img>Discord</Button>{' '}
        <Button variant="outline-light" style={{width:'17vw', whiteSpace:'nowrap'}} className="btn1" href="https://twitter.com/ChangeDAO">  <img src="./twitter.png"  style={{ width:'1.2rem',marginRight:'1vw'}} alt='twitter logo'></img>Twitter</Button>{' '}
        <NavLink to="/interest"> <Button variant="primary" className="btn-width btn-color" style={{width:'17vw', whiteSpace:'nowrap'}}>Message Us</Button>{' '}</NavLink>
   
       </div>
      

      </div >
 
  {/*section division*/}  

    
      <div className="section " style={{marginTop:'0'}}>
      <ColoredLine color='#FFFFFF' style={{height:'0.5px !important'}}/> {/*this handle white horizontal line */}  
      </div>

  {/****************************************************************************video section***********************************************/}  
  <div className='video-section'>
  <h1 className=' color-white mt-5 h1-style' >Share Your Story. Be the Change.</h1>


  <div className='sub-video-section' >

      <div className='aside1' >
          <h5 className='h5-style'>
                 Elevating Seven Stories of Social Change
          </h5>
          <p className='text-white pt-5 aside1-text'>
          Our global grassroots movement starts with you and your story of social change. 
          Express the change, inspire our community, 
          and win one of the first editions of our Genesis NFT.
          </p>
          <div style={{width:'40%'}} className='mt-3'>
          <NavLink to="/giveaway"> <Button variant="primary" className="btn-color mg-t btn1" style={{minWidth:'12vw'}}>  Get the Details   </Button>{' '}</NavLink>
       

          </div>
        
      </div>

      <div className='aside2 mt-4'>
      
      <video class="vid-styling"  loop autoPlay muted controls="controls" >
                            <source src={Video}  type="video/mp4" />
                        </video>
    
      </div>

  </div>







  </div>



{/*****************People, profile planet section, note that the class border left handles  purple horizonal line***********/}



      <div className="section2 pt-5" > {/*****Pt, ml, justify-content-md-center, mx-auto, dots, mr are all bootstrap utility classes ******/}
     <h1 className='color-white'>We’re Introducing Triple P NFTs</h1>
    
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
      Create to your heart’s delight
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

     
 {/**************************************************Join our story section***********************************************************************/}

       <div className='section3' >
       <Row className="justify-content-md-center mx-auto" >
      <Col md="auto" >
      <h4 className='text-styling'>Join Our Story On     <Button variant="outline-light" style={{width:'200px'}} href="https://discord.gg/mHSnHctCAV"> <img src="./discord.png" style={{ width:'1.2rem',marginRight:'1rem'}} alt='Discord logo'></img>Discord</Button>{' '}</h4>
      </Col>
      </Row>
       </div>

     
{/***********************************************************NFT as a force of change**************************************************************/}
    
     
         <Stack gap={2} className="col-md-12 mx-auto section4" style={{textAlign:'center'}}>
          <div>
         <h1 className=' color-white mt-5' >NFTs as a Force for Change</h1>
         <div className='justify-content-md-center mx-auto dots'>
      <span class="dot "></span>
<span class="dot ml-2 mr-2"></span>
<span class="dot"></span>

      </div>
       </div>
       <div className='mt-3'>
         <p className='color-white mt-5 Change-text' >
        <span style={{fontWeight:'bold'}}> Changemakers </span> create positive change in the world
         </p>
         <p className='color-white Change-text' style={{marginTop:'-10px'}}>
        <span style={{fontWeight:'bold'}}> Art  </span> inspires and educates us to participate
         </p>
         <p className='color-white Change-text' style={{marginTop:'-10px'}}>
         <span style={{fontWeight:'bold'}}>  Community  </span>makes change happen as one global movement
         </p>
       </div>
    </Stack>



   





   {/***********************************************Are you  change maker section****************************************************/}
   <div className='section6'>
<Container >
<Row className='realign'>
    <Col style={{marginTop:'50px'}} >
    <Stack  gap={5 } className='mgt'>
 <h2 className= 'color-white'>Are you a Changemaker? </h2>
 <p style={{color:'white'}}>Changemakers are hand-selected and verified by our core team. They are artists, causes and curators that have a track-record of using NFTs as a force for change in the world</p>
<p style={{color:'white'}}>Want to get involved? Connect with our team today.</p>
<div>
<Button variant="outline-light" style={{width:'13vw', whiteSpace:'nowrap'}} className="btn1 " href="https://discord.gg/mHSnHctCAV">  <img src="./discord.png" alt='Discord logo'  style={{ width:'1.2rem',marginRight:'1vw'}} ></img>Discord</Button>{' '}
<NavLink to="/interest"><Button variant="primary" className="btn-color mg-t " style={{minWidth:'13vw'}} >Message Us</Button>{' '}</NavLink>
</div>
</Stack>
    </Col>
    <Col style={{marginTop:'120px'}} className=' mb-5'>
    <img src="./SplitPay.gif" style={{ width:'100%'}} className="" alt='ChangeDao-Journey'></img>
    </Col>
  </Row>
</Container>
   </div>
 {/**************************************************************meet the team**********************************************************************/}
    <div className='section7'>
     
      <h1 className='color-white mt-5' >Meet the Core Team </h1>
     
     
      <span className='color-white' style={{ fontStyle:'italic'}}>Public, Proven and Trusted</span>
      <div className='justify-content-md-center mx-auto dots'>
      <span class="dot "></span>
<span class="dot ml-2 mr-2"></span>
<span class="dot"></span>

      </div>
      <div>
   


        <div class="wrapper-grid">
      
        <div class="containe ">
  
        <a href="https://www.linkedin.com/in/davidall" className="a-link"> <img src='./images/All.jpg' alt='David All ' class="profile-img" />    </a>
        <a href="https://www.linkedin.com/in/davidall" className="a-link">  <h1 class="name color-white mt-4">David All </h1> </a>
        <a href="https://www.linkedin.com/in/davidall" className="a-link">   <p class="description" style={{color: 'white', fontWeight:'lighter'}}>Founder, <br className="visibility"  />Changemaker  </p></a>
      
   
    </div>

    <div class="containe">
  
    <a href="https://www.linkedin.com/in/hanaya-brasali" className="a-link"> <img src="./images/Hanaya.jpeg" alt='Hanaya Brasali' class="profile-img"/></a>
    <a href="https://www.linkedin.com/in/hanaya-brasali" className="a-link"> <h1 class="name color-white mt-4">Hanaya Brasali</h1></a>
    <a href="https://www.linkedin.com/in/hanaya-brasali" className="a-link"> <p class="description" style={{color: 'white', fontWeight:'lighter'}}> Community Lead </p></a>
  

</div>

<div class="containe">
  
<a href="https://linktr.ee/bryanbrinkman" className="a-link"> <img src="./images/Bryan.jpg" alt='Bryan Brinkman' class="profile-img"/></a>
<a href="https://linktr.ee/bryanbrinkman" className="a-link"> <h1 class="name color-white mt-4">Bryan Brinkman</h1></a>
<a href="https://linktr.ee/bryanbrinkman" className="a-link">  <p class="description" style={{color: 'white', fontWeight:'lighter'}}>Artist Relations </p></a>
  

</div>

<div class="containe">
  
<a href="https://github.com/onionpeel" className="a-link"> <img  src="./images/Dinkleman.jpg" alt='Jeff Dinkelman' class="profile-img"/> </a>
<a href="https://github.com/onionpeel" className="a-link">  <h1 class="name color-white mt-4">Jeff Dinkelman</h1></a>
<a href="https://github.com/onionpeel"className="a-link"> <p class="description" style={{color: 'white', fontWeight:'lighter'}}>Full-Stack Developer </p></a>

</div>

<div class="containe">

<a href="https://www.linkedin.com/in/driscollkelsey" className="a-link"> <img src="./images/Kelsey.jpeg" alt='Kelsey Driscoll' class="profile-img"/></a>
<a href="https://www.linkedin.com/in/driscollkelsey" className="a-link"><h1 class="name color-white mt-4">Kelsey Driscoll</h1></a>
<a href="https://www.linkedin.com/in/driscollkelsey" className="a-link">  <p class="description" style={{color: 'white', fontWeight:'lighter'}}>Changemaker Lead</p></a>
  

</div>
<div class="containe">
  
<a href="https://www.linkedin.com/in/kay-morrison-4a5bb913" className="a-link"><img src="./images/Morrison.jpg" alt='Kay Morrison' class="profile-img" /> </a>
<a href="https://www.linkedin.com/in/kay-morrison-4a5bb913" className="a-link"><h1 class="name color-white mt-4">Kay Morrison</h1></a>
<a href="https://www.linkedin.com/in/kay-morrison-4a5bb913" className="a-link"> <p class="description" style={{color: 'white', fontWeight:'lighter'}}> Operations Lead </p></a>

</div>
<div class="containe">
  
<a href="https://www.linkedin.com/in/peterupapong" className="a-link"><img src="./images/Upapong.jpg" alt='JPeter Upapong' class="profile-img" /></a>
<a href="https://www.linkedin.com/in/peterupapong" className="a-link"><h1 class="name color-white mt-4">Peter Upapong</h1></a>
<a href="https://www.linkedin.com/in/peterupapong" className="a-link"> <p class="description" style={{color: 'white', fontWeight:'lighter'}}> Platform Lead </p></a>

  

</div>

<div class="containe">
  
<a href="https://www.linkedin.com/in/stephaniedale4" className="a-link"> <img src="./images/Dale.jpg" alt='Stephanie Dale' class="profile-img" /></a>
<a href="https://www.linkedin.com/in/stephaniedale4" className="a-link"> <h1 class="name color-white mt-4">Stephanie Dale</h1></a>
<a href="https://www.linkedin.com/in/stephaniedale4" className="a-link"> <p class="description" style={{color: 'white', fontWeight:'lighter'}}> Art Director, Designer </p></a>

  

</div>
<div class="containe">
  
<a href="https://www.linkedin.com/in/olaoluwa-fatolu-0127311b5/" className="a-link"> <img src="./images/Olaoluwa.jpeg" alt='Kay Morrison'  class="profile-img"/></a>
<a href="https://www.linkedin.com/in/olaoluwa-fatolu-0127311b5/" className="a-link"> <h1 class="name color-white mt-4">Olaoluwa Fatolu</h1></a>
<a href="https://www.linkedin.com/in/olaoluwa-fatolu-0127311b5/" className="a-link"> <p class="description" style={{color: 'white', fontWeight:'lighter'}}> Full-Stack Developer </p></a>

  

</div>


        </div>

    

             

 
          <p style={{fontSize:'30px', fontStyle:'italic', color:'white', textAlign:'center' ,marginTop:'20px'}}> Find us all on Discord!
          <Button variant="outline-light" style={{marginLeft:'20px'}} href="https://discord.gg/mHSnHctCAV" >  <img src="./discord.png" style={{ width:'1.2rem'}} alt='Discord logo'></img></Button>{' '}
          </p>
          
      </div>
  
    </div>
    



    <div className='section8'>
    <Row className="justify-content-md-center mx-auto" >
      <Col md="auto">
          <h4 className='text-styling'style={{fontWeight:'bold'}}>Share Your Story. Be the Change.</h4>
          <p style={{fontSize:'25px', fontWeight:'lighter'}} className='color-white'>Participate in Seven Stories of Social Change</p>

      

       <div  className='text-center mt-5'>
          <NavLink to="/giveaway"> <Button variant="primary" className=" btn-color2 " size="lg" style={{ textAlign:'center'}}>  Get the Details   </Button>{' '}</NavLink>
       

          </div>
        
     

      {/*  <Row className='mt-5'>
            <Col>
              <Button variant="outline-light" style={{width:'200px'}} className='mt-3' > <img src="./discord.png" style={{ width:'1.2rem',marginRight:'1rem'}} className="" alt='Discord logo'></img>Discord</Button>{' '}
            </Col>
            <Col >
            <Button variant="outline-light" style={{width:'200px'}} className='mt-3'>  <img src="./twitter.png"  style={{ width:'1.2rem',marginRight:'1rem'}} className="" alt='twitter logo'></img>Twitter</Button>{' '}
            </Col>
            <Col > 
              <Button variant="primary" className="btn-color2 mt-3" style={{width:'200px'}}>Get Email Updates</Button>{' '}
              </Col>
      </Row>*/}
    </Col>
   </Row>
  </div>
  <div className='sectionDiv'/>


    </div>

   
     
  
  )
}

export default Home;