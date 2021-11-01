import { Navbar, Container, Row,Button,Col,Form }from 'react-bootstrap';
import AlertDismissible from "./Alert"
import { useState } from 'react';

const Interest = () => {
  




    return(

        <div>
                    <div className='giv-section4'>
     <div className='giv-submit-h3 mb-5'>
     <h3 className='text-white mt-5 ' style={{fontWeight:'bold'}}>Express your interest to learn more about ChangeDAO</h3>
     </div>

     <Form action="https://getform.io/f/017219ac-e742-44f7-9248-854961bf1ebf" method="POST">
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
            <Form.Control type="text" placeholder="" name='SocialMediaHandle'/>
            </Form.Group>

              
            
         </div>
         <div className='giv-aside2 giv-mgt'>
        
         <Form.Group controlId="formGridState">
                <Form.Label className='text-white'>Which team do you want to be connected with: *</Form.Label>
                <Form.Select defaultValue="Choose..." name="Team To Connect" required>
                    <option>Select the team you want to connect with</option>
                    <option>Changemakers (Artists, Curators, DAOs, Nonprofit Organizations, Foundations, similar)</option>
                    <option>Sponsors (NFT collectors, Volunteers)</option>
                    <option>Technical Team (Devs, Product design, Integrations)</option>
                   
                </Form.Select>
                
    </Form.Group>

    
    <Form.Group  controlId="formGridEmail" className='mt-4'>
            <Form.Label className='text-white'>How did you discover ChangeDAO *</Form.Label>
            <Form.Control type="text" placeholder=""  name="How did you dicover ChangeDao" required/>
            </Form.Group>

                    <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
                
                    <Form.Label className='text-white'>Question / Comment for ChangeDAO Team</Form.Label>
                    <Form.Control as="textarea" rows={3}  name="Questions" />
                </Form.Group>
       

         </div>

   
          
     </div>

 

   <div className='text-center'>
       
  <Button variant="primary" size="lg" type='submit' className='mt-5 giv-btn1'style={{ textAlign:'center'}}>
     Submit
    </Button>{' '} 
       </div>

    
     

    </Form>
       
  
 </div>
        </div>
    )




}






export default Interest;