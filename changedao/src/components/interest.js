import { Navbar, Container, Row,Button,Col,Form }from 'react-bootstrap';


const Interest = () => {




    return(

        <div>
                    <div className='giv-section4'>
     <div className='giv-submit-h3 mb-5'>
     <h3 className='text-white mt-5 ' style={{fontWeight:'bold'}}>Express your interest to learn more about ChangeDAO</h3>
     </div>

     <Form action="https://getform.io/f/8df1758c-95fd-4083-bce7-251687f53a24" method="POST">
     <div className='giv-section4-sub '>
         <div className='giv-aside1 '>
             
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className='text-white'>Your Name (First, Last) or Pseudonym (Anonymous)*</Form.Label>
                <Form.Control type="text" placeholder="Full Name" name='Interest name'  required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail" className='mt-4'>
            <Form.Label className='text-white'>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='Interest email' required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail" className='mt-4'>
            <Form.Label className='text-white'>Name of org (if applicable)</Form.Label>
            <Form.Control type="text" placeholder=""  name='Interest name of org' />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" className='mt-4'>
            <Form.Label className='text-white'>Twitter handle*</Form.Label>
            <Form.Control type="text" placeholder="@changemaker"  name='Interest twitterHandle' required/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail" className='mt-4'>
            <Form.Label className='text-white'>Other social media handles (please specify platform)</Form.Label>
            <Form.Control type="text" placeholder="" name='Interest other SocialMediaHandle' required/>
            </Form.Group>

              
            
         </div>
         <div className='giv-aside2 giv-mgt'>
        
         <Form.Group controlId="formGridState">
                <Form.Label className='text-white'>Which team do you want to be connected with: *</Form.Label>
                <Form.Select defaultValue="Choose..." name="TeamConnect" required>
                    <option>Select the team you want to connect with</option>
                    <option>Changemakers (Artists, Curators, DAOs, Nonprofit Organizations, Foundations, similar)</option>
                    <option>Sponsors (NFT collectors, Volunteers)</option>
                    <option>Technical Team (Devs, Product design, Integrations)</option>
                   
                </Form.Select>
                
    </Form.Group>

    
    <Form.Group  controlId="formGridEmail" className='mt-4'>
            <Form.Label className='text-white'>How did you discover ChangeDao *</Form.Label>
            <Form.Control type="text" placeholder=""  name="How did you dicover ChangeDao" required/>
            </Form.Group>

                    <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
                
                    <Form.Label className='text-white'>Question / Comment for ChangeDAO Team</Form.Label>
                    <Form.Control as="textarea" rows={3}  name="Questions" />
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






export default Interest;