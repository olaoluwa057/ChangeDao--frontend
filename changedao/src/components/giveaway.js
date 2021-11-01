
import"../components/css/giveaway.css"
import Video from "./videos/vid.mp4"
import { Navbar, Container, Row,Button,Col,Form }from 'react-bootstrap';



const Giveaway = () => {

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            marginTop:5,
            marginBottom:5
        }}
    />
);



return(

    <div className='giveaway-page'>
        <div className='giv-section1'>
            <h1 className='text-white'>Share Your Story. Be the Change.</h1>

        <h3 className="text-greenish mt-5">Elevating Seven Stories of Social Change.</h3>
        <p className='text-white mt-5'>We’re searching for seven extraordinary stories -- </p>
        <p className='text-white'> one for each of ChangeDAO’s seven areas of social change.</p>

        <h3 className='text-white mt-5'>We’re after your personal story</h3>
        <p className='text-white mt-5 format'>We want to hear from individuals anywhere in the world about the</p>
        <p className='text-white format'> social change that you <span style={{fontWeight:'bold'}}> have made </span>or <span style={{fontWeight:'bold'}}>want to make </span> in our world.</p> 

        <h3 className='text-white mt-5'>Seven winners will receive our Genesis NFT.</h3>

        
      <div className='giv-aside mt-5'>
      
      <video class="giv-vid-styling"  loop autoPlay muted controls="controls" >
                            <source src={Video}  type="video/mp4" />
    </video>
<div className='giv-p-tag'>
<p style={{fontWeight:'bold'}} className='text-white '>Peace. Love. Art.</p>
    <p className='text-secondary' style={{fontWeight:'lighter'}}>Genesis NFT by ChangeDAO</p>

</div>
  
      </div>
        </div>

         {/************************************************** The Details***********************************************************************/}

       <div className='giv-details' >
       <Row className="justify-content-md-center mx-auto" >
      <Col md="auto" >
      <h2 className='text-white'>The Details    
       </h2>
      </Col>
      </Row>
       </div>
{/****************************************************************setion2*********************************************************** */}

<div className='giv-section2'>

<div className='giv-side1 mt-5'>
<h3 className="text-greenish">Contest Overview</h3>
</div>
<div className='giv-side2 mt-5'>
<p className="text-white format">Seven stories that meet the requirements will be hand-selected</p>
<p className="text-white format"> by the ChangeDAO core team to receive the first editions</p>
<p className='text-white format'>of our Genesis NFT: <span style={{fontWeight:'bold'}}> Peace. Love. Art. </span></p>

<p className='visible'></p>

<p className='text-white mt-5 format'style={{fontWeight:'bold'}} > Winners will receive the NFT as an ERC721 airdropped to their</p>
<p className='text-white format ' style={{fontWeight:'bold'}}> designated ethereum wallet address on the ethereum blockchain.</p>

<p className='visible'></p>

<p className='text-white mt-5 format'> As NFT holders, these seven storytellers will be some of the first </p>
<p className='text-white format'> members of our community with the potential for their stories to be elevated,</p>
<p className='text-white format'>   pitched, and funded as ChangeDAO projects in the future.</p>

<p className='text-white mt-5' style={{fontWeight:'bold'}}>Deadline for entries is 12 PM PDT on November 30, 2021</p>
<p className='text-white'> 
No entries submitted after the deadline will be considered.
</p>

</div >

</div>

  {/*section division*/}  
    
  <div className="vr-line" style={{marginTop:'0'}}>
      <ColoredLine color='#FFFFFF' style={{height:'0.5px !important'}}/> {/*this handle white horizontal line */}  
      </div>

      <div className='giv-section2'>

<div className='giv-side1 mt-5'>
<h3 className="text-greenish">How to  Participate</h3>
</div>


<div className='giv-side2 mt-5'>
<h3 className='text-white' style={{fontWeight:'bold'}}>STEP 1: Create Your Video Story </h3>
<p className='text-white mt-5'>1. Choose the category of social change that best fits your story</p>
<ul>
    <li className='text-white' > Financial Inclusion </li>
    <li className='text-white' >Supply Chain</li>
    <li className='text-white' >Identity & Vulnerable Populations </li>
    <li className='text-white' >Energy & Environment</li>
    <li className='text-white' >Human Rights</li>
    <li className='text-white' >Health and Wellness</li>
    <li className='text-white' > Education </li>
</ul>
<p className='visible'></p>
<p className='text-white mt-5 format'>2. Create a video submission or testimonial that tells your story, and educates</p>
<p className='text-white format'> and inspires our community about the social change you want to make and</p>
<p className='text-white format'> why it matters. Submissions must abide by the video requirements to be</p>
<p className='text-white format'>  considered.</p>


<p className='text-white mt-5'>3. Upload your video to YouTube or Vimeo</p>
<div className='giv-box'>
    <p className='text-white' style={{fontWeight:'bold'}}>VIDEO REQUIREMENTS</p>
    <p className='text-white'>- 3 minutes or less </p>
    <p className='text-white'> - Camera phone video and audio quality accepted</p>
    <p className='text-white'> - No background music or copyrighted material </p>
    <p className='text-white'> - Friends, props, graphics, etc. allowed </p>
    <p className='text-white'> - Include English captions if necessary</p>

</div>

<h3 className='text-white mt-5' style={{fontWeight:'bold'}}>STEP 2: Share Your Story on Twitter</h3>
<p className='text-white mt-5 format'>Grab this Tweet, replace the bracketed information with your story, and post </p>
<p className='text-white format'>  to Twitter:</p>
<p className='visible'></p>
<div className='giv-box2 '>
    <div className='giv-twitter-logo'>
    <img
        src="./images/twitter.png"
        width="30"
        height="30"
        className="d-inline-block align-top position"
        alt="twitter logo"
      />
    </div>
    <div className='giv-twitter-text mt-3'>
        <p className='text-white' style={{fontStyle:'italic'}} >My story of social change for @ChangeDAO addresses</p>
        <p className='text-white ' style={{fontStyle:'italic'}}> [area of impact]. #☮️❤️🖼</p>
        <p className='text-white ' style={{fontStyle:'italic'}}>Here’s my story [link to video]</p>

    </div>

</div>

<h3 className='text-white mt-5' style={{fontWeight:'bold'}}>STEP 3: Submit Your Story to ChangeDAO</h3>
<p className='text-white mt-5'>Complete and submit ChangeDAO's official contest form (see below)</p>

<p className='visible'></p>

<p className='text-white mt-5 format'>NOTE: To be considered, all contestants must submit BOTH a Tweet (as</p>
<p className='text-white format'> outlined in Step 2) AND an official submission through the ChangeDAO </p>
<p className='text-white format'> website (form below)</p>


<h3 className='text-white mt-5' style={{fontWeight:'bold'}}>Questions?</h3>
<p className='text-white format'>Reach out to us on Discord and a team member will </p>
<p className='text-white format'> assist you.</p>


</div >

</div>


   {/*section division*/}  
    
   <div className="vr-line" style={{marginTop:'0'}}>
      <ColoredLine color='#FFFFFF' style={{height:'0.5px !important'}}/> {/*this handle white horizontal line */}  
      </div>

 {/*section4*/}  

 <div className='giv-section4'>
     <div className='giv-submit-h3 mb-5'>
     <h3 className='text-white mt-5 ' style={{fontWeight:'bold'}}>Submit Your Story Below</h3>
     </div>

     <Form action="https://getform.io/f/c4a3921f-4ba4-4261-bec3-4e5992d7adae" method="POST">
     <div className='giv-section4-sub '>
         <div className='giv-aside1 '>
             
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className='text-white'>Your Name (First, Last) or Pseudonym (Anonymous)*</Form.Label>
                <Form.Control type="text" placeholder="Full Name" name='name'  required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail" className='mt-4'>
            <Form.Label className='text-white'>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail" className='mt-4'>
            <Form.Label className='text-white'>Name of org (if applicable)</Form.Label>
            <Form.Control type="text" placeholder=""  name='name of org' />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" className='mt-4'>
            <Form.Label className='text-white'>Twitter handle*</Form.Label>
            <Form.Control type="text" placeholder="@changemaker"  name='twitterHandle' required/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail" className='mt-4'>
            <Form.Label className='text-white'>Other social media handles (please specify platform)</Form.Label>
            <Form.Control type="text" placeholder="" name='otherSocialMediaHandle' />
            </Form.Group>

              
            
         </div>
         <div className='giv-aside2 giv-mgt'>
        
         <Form.Group controlId="formGridState">
                <Form.Label className='text-white'>Which area of social change does your project best align with? *</Form.Label>
                <Form.Select defaultValue="Choose..." name="areaOfChange" required>
                    <option>Select a Social Change Area</option>
                    <option>Financial Inclusion</option>
                    <option>Supply Chain</option>
                    <option>Identity & Vulnerable Populations</option>
                    <option>Energy & Environment</option>
                    <option>Human Rights</option>
                    <option>Health and Wellness</option>
                    <option>Education</option>
                </Form.Select>
                
    </Form.Group>

    
    <Form.Group controlId="formGridEmail" className='mt-4'>
            <Form.Label className='text-white'>Please provide the Youtube or Vimeo link to your video submission *</Form.Label>
            <Form.Control type="text" placeholder=""  name="videoLink" required/>
            </Form.Group>

            <Form.Group  controlId="formGridEmail" className=' mt-4'>
            <Form.Label className='text-white'>Please provide the link to your Tweet announcing your submission *</Form.Label>
            <Form.Control type="text" placeholder="" name='twitterLink' required/>
            </Form.Group>
       

         </div>

   
          
     </div>

   <div className='text-center'>
       
   <Button variant="primary" size="lg" type='submit' className='mt-5 giv-btn1' style={{ textAlign:'center'}}>
     Submit Your Story
    </Button>{' '}
       </div>
     

    </Form>
       
  
 </div>

 




 

















            
    </div>



    
)





















}

export default Giveaway;