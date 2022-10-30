import React from 'react';
import './index.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function Task() {
  return <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">St john <br /> Lettings</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">To Let</Nav.Link>
            <Nav.Link href="#action1">About Us</Nav.Link>
            <Nav.Link href="#action1">Favourite</Nav.Link>
            <Nav.Link href="#action2">News</Nav.Link>
          </Nav>
          <Form className="d-flex m-2">
            <Button className='button m-2'>Enquiry</Button>
            <Button className='button m-2'>Contact Us</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <div className='bgc d-flex justify-content-between'>

    <Container className='mt-5'>
     
     <Row>
       <Col><Dropdown >
     <Dropdown.Toggle variant="light w-auto"id="dropdown-basic">
       Location
     </Dropdown.Toggle>

     <Dropdown.Menu >
       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
     </Dropdown.Menu>
   </Dropdown></Col>
       <Col><Dropdown >
     <Dropdown.Toggle variant="light  w-auto"id="dropdown-basic">
       Max-Bedroom
     </Dropdown.Toggle>

     <Dropdown.Menu >
       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
     </Dropdown.Menu>
   </Dropdown></Col>
       <Col><Dropdown >
     <Dropdown.Toggle variant="light w-auto"id="dropdown-basic">
       Location
     </Dropdown.Toggle>

     <Dropdown.Menu >
       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
     </Dropdown.Menu>
   </Dropdown></Col>
     </Row>
   </Container>
   
      <Button variant="light m-5 w-auto" className='button w-25'>Search</Button>
        


    </div>
    <div className='image'>
      <div className='text'>

         <h1 className='font'>St.John Residential <br />Lettings</h1>
         <p>we offer high ends apartments in premium development such as Westminster Quarter,Paddington Gardens, Goodman's Field, RoyalWharf,London Docks and Smithfield Square. </p><br />
         <Button className='button'>View Properties</Button>
         <Button className='button m-2'>Enquiry</Button>
         <p>In partnership with:</p>
         <div className='d-flex justify-content-center align-items-center gap-5'>
        <h4 >Rightmove</h4>
         <h4 >Zoopla</h4>
         </div>
         </div>
</div>


<div className=' text-primary pb-5'>

<h1 className='d-flex justify-content-center mt-5 pt-5'>Find your next home</h1><br />
<p className='d-flex justify-content-center '>We have seven locations acroos London, all with their personality and character. Together </p>
<p className='d-flex justify-content-center '>we can find the perfect home for you</p>
<Button type='button' className='but'>Get Started</Button>
</div>
{/* ------------------ */}
<div className='furnicher-image'></div>

<div className='bgc-nevyBlue text-light pt-5'>
  <div className='d-flex justify-content-between'>
  <h1 className='Royal'>Royal Whart</h1>
  <Button className='m-3'>View Properties</Button>
  </div>
  <p className='text-size '>Just minutes from Canary Wharf, and less than 30 minutes from Oxford Street, this is a rich, textured neighbourhood <br />focused around the lively central high street, a broad market square and a rolling riverside park</p>
</div>

{/* ------------------ */}
<div className='goodmans-fileds'></div>

<div className='bgc-nevyBlue text-light pt-5'>
  <div className='d-flex justify-content-between'>
  <h1 className='Royal'>Goodman's Fields</h1>
  <Button className='m-3'>View Properties</Button>
  </div>
  <p className='text-size '>Goodman's Fields is a stylish, modern mixed-use central London neighbourhood with over 1000 residential units and a smart selection of amenities set on the fringes of the City of London, nearby Aldgate East station</p>
</div>
{/* ---------------------- */}
 <div className='smithfield-square'></div>
 <div className='bgc-nevyBlue text-light pt-5'>
  <div className='d-flex justify-content-between'>
  <h1 className='Royal'>smithfield Square</h1>
  <Button className='m-3'>View Properties</Button>
  </div>
  <p className='text-size '>Smithfield Square, a brand new collection of contemporary, high specification apartments in the heart of Hornsey. One long side of Smithfield Square houses a large hostel/bar/restaurant/indoor space and residences..</p>
</div>

<div className=' text-primary pb-4'>

<h1 className='d-flex justify-content-center mt-5 pt-5'>About St John Lettings</h1><br />
<p className='d-flex justify-content-center '>Offering high end flats in premium developments across London </p>
<p className='d-flex justify-content-center '>we can find the perfect home for you</p><br/>
<Button className='but'>Find our more</Button>
</div>

<div className='grey-bgc text-light d-flex justify-content-between'>
 <Container>
  <h1  className='pt-5'>Looking for a new place?</h1>
  <h1>Make an enquiry</h1>
  <p>We have seven locations across London. Make anenquiry today with <br />apartments immediately available to move into</p>
  <Button className='bgc-nevyBlue'>Make an enquiry</Button>
  </Container>
  <img src="https://images.squarespace-cdn.com/content/v1/5d910af7083c242eceec0a93/1608752689300-JJIZ5NF0EC8WTT3GVYAP/Alberto+Murillo+++++%2522Marrakesh%2522+++++2020+++++High+gloss+enamel+on+canvas+++++40x50+++++%2410%2C000.00.jpg?format=1500w" height={280} width={200} alt="" />
</div>

  <h2 className=' d-flex justify-content-center p-5'>View our partners</h2>
   <div className='d-flex justify-content-between'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHafXHyNjS4MfUAsYrg3kIMH5-HFvvy7PzldNhP64&s" alt="" />

    <img src="https://i0.wp.com/logotaglines.com/wp-content/uploads/2017/08/samsung-Logo.jpg?fit=1600%2C1188&ssl=1" height={150} width={150} alt="" />
    <img src="https://1000logos.net/wp-content/uploads/2021/05/Champion-logo.png"  height={150} width={150}  alt="" />

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTWsqWMiq9gikEzRJEHworNUuwf92hdQDHrOksVQIACg&s" alt="" />

    <img src="https://1000logos.net/wp-content/uploads/2021/05/Booking.Com-logo.png" height={150} width={150}alt="" />
   </div>
      
   <div className='grey-bgc text-light'>
    <Container className='p-5'>
      <div className='pt-5'>
    <h1 >FAQs</h1>
    <br />
    <p>We have seven locations across London. Make anenquiry today with apartments immediately available to move into</p>
    <br />
    <div className='d-flex justify-content-between'>
    <h2><strong>What are properties?</strong></h2>
    <img src="https://play-lh.googleusercontent.com/TI8o079rVoxaQ5ZeDcLfQRlS7MQrwNbpGh4-WdOYC2lYIZk1jAhABtABLU_kl2aReCSl" height={50} width={50} alt="" />
    </div>
    <br /><br />
    <div className='d-flex justify-content-between'>
    <h2><strong>What are portfolios?</strong></h2>
    <img src="https://www.shareicon.net/download/2015/09/15/101562_incorrect.ico"  height={50} width={50} alt="" />
    </div>
    <br /><br />
    <p>These are portfolios and you can find our important information about them. Read this and enjoy. Lorem ipsum sumo denta et il. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, exercitationem repellendus qui eius perferendis vitae facere reprehenderit voluptatem consectetur officiis architecto adipisci dignissimos earum magnam dolorem aliquam eos impedit neque illo debitis tenetur natus nemo? Facere, cupiditate aliquid excepturi expedita consequatur perferendis facilis, rem quo ea nam voluptatem id hic?</p>
<br /><br />
<div className='d-flex justify-content-between'>
    <h2><strong>What are partners?</strong></h2>
    <img src="https://play-lh.googleusercontent.com/TI8o079rVoxaQ5ZeDcLfQRlS7MQrwNbpGh4-WdOYC2lYIZk1jAhABtABLU_kl2aReCSl" height={50} width={50} alt="" />
    </div>
    <br /><br />
    <div className='d-flex justify-content-between'>
    <h2><strong>What is everything else?</strong></h2>
    <img src="https://play-lh.googleusercontent.com/TI8o079rVoxaQ5ZeDcLfQRlS7MQrwNbpGh4-WdOYC2lYIZk1jAhABtABLU_kl2aReCSl" height={50} width={50} alt="" />
    </div>
    </div>
    </Container>
   </div>

   
   <div>
    <Container>
    <h1><strong> Entertainment & Features</strong></h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>

      <div className='bor d-flex justify-content-between'>
        <div>
         <div><strong >01</strong></div>
        <Container className='p-5'  >
         <h2  >Pool Table</h2>
         <p>Games area including a pool table</p>
         <img className='pool-Table'src="https://laurellanesnj.com/wp-content/uploads/2020/02/pool.png" alt="" height={270} width={370} />
         
        
         </Container>
         <div className='writeMode'>Pool Table</div>
         </div>
         <div>
          <Container className='d-flex vl'>

         <div className='vl'>
          <h4 className='gl upper p-2'>04</h4>
         </div>
         <div className='vl'>
          <h4 className='gl upper p-2'>03</h4>
         </div>
         <div className='vl'>
          <h4 className='gl upper p-2'>02</h4>
         </div>
        
         
          </Container>
         </div>
    
      </div>
      
    </Container>
     
    </div>
    <br /><br /><br />
    <div className='bgc text-light p-3'>
      <Container>
      <h1 className='pt-5'>St.John Lettings</h1>
      <p>Address:</p>
      <p className='pb-2'>Palladium House 1-4 Argyll Street, London, W1F7LD</p>

      <strong>Contact:</strong>
      <div>07470677390</div>
      <div className='p-2'> info@stjohnlettings.co.uk</div>
<div className='d-flex gap-3 pb-5'>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8PsUj_RfqfJ_xRImUS3BpKJJjXmC-g7BXg&usqp=CAU" alt="" height={30} width={30} />



<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKuYQM0_gqZvtLsZNTqDjn6FtlULL94aXdHl1RuI&s" height={30} width={30} alt="" />
      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSQ-KXrXd-fdpwwFysxttzP7jOKxNmhXXdw&usqp=CAU" alt=""  height={30} width={30} />
</div>
      <hr />

      <div className='pb-5'>2022 St.John Lettings.All right reserved</div>
     
      </Container>
    </div>


  </>
}
