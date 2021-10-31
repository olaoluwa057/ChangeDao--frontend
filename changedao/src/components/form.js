
import {Modal,Button,Form}from 'react-bootstrap';



function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter Email 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form action="https://getform.io/f/664280cb-7478-486f-8945-4cc9d819e88a" method="POST">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name='email update' />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
  
    <div className='text-center'>
         
     <Button variant="primary" size="lg" type='submit' className='mt-2 giv-btn1' style={{ textAlign:'center'}}>
       Submit
      </Button>{' '}
         </div>
    </Form>
        </Modal.Body>
       
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal;