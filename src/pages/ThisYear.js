import React, {Component} from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom';

import { Container, Button, ButtonGroup, Card, Row, Col} from 'react-bootstrap';

export default function ThisYear() {

    const options = [
        { value: 'Year To Date', label: 'This Year' },
        { value: 'This Month', label: 'This Month' },
        { value: 'This Week', label: 'This Week' },
        { value: 'Today', label: 'Today' }
      ]
      
     
    return (
<div>
<Card style={{width:'120rem',  backgroundColor: 'rgb(28, 53, 45)' }}>
    <h3 style = {{textAlign:'left', marginTop:'90px', marginLeft:'120px', marginBottom:'30px',  color:'white' }}> Dashboard</h3>
    <Container>
       
    <ButtonGroup  aria-label="Basic example" style={{marginLeft:'70%',marginBottom:'200px', position:'relative'}}>
    
    <Link to = '/Dashboard'>
  <Button variant="primary">Today</Button>
    </Link>
   
   <Link to = '/ThisWeek'>
  <Button variant="secondary">This Week</Button>
   </Link>
   

  <Link to = '/ThisMonth'>
  <Button variant="secondary">This Month</Button>
  </Link>
  
 
  <Button variant="secondary">This Year</Button>



</ButtonGroup>

    </Container>
    </Card>
<Container>
    <Row style={{ justifyContent:'center', alignItems:'center'}}>

<Card style={{ width: '20rem', height: '15rem', marginBottom:'20px', marginTop:'-10%', marginLeft:'-5%'}}>
     
     <Card.Body>
         <Card.Title> JAN-MAR</Card.Title>
         <Card.Img style={{height: '50px',width:'50px', marginLeft:'70%'}} variant="top"/>
         <Card.Text>
             Average daily
             </Card.Text>
             <Card.Text>
             1,253
         </Card.Text>
        
     </Card.Body>
    
     </Card>

     <Card style={{ width: '20rem',height: '15rem', marginLeft:'30px', marginBottom: '20px',marginTop:'-10%'}}>
     <Card.Body>
         <Card.Title> MARCH</Card.Title>
         <Card.Img style={{height: '50px',width:'50px', marginLeft:'70%'}} variant="top"/>
         <Card.Text>
             Average daily
             </Card.Text>
             <Card.Text>
             1,253
         </Card.Text>
         
     </Card.Body>
     

     </Card>


     <Card style={{ width: '20rem',height: '15rem', marginLeft:'30px', marginBottom: '20px', marginTop:'-10%'}}>
     <Card.Body>
         <Card.Title> FEBRUARY</Card.Title>

         <Card.Text>
             BIN DISTRIBUTION
         </Card.Text>
         
         <Card.Text>
             124,835
         </Card.Text>

         <Card.Text>
             TOTAL INVOICES
         </Card.Text>

         <Card.Text>
             124,835
         </Card.Text>
     </Card.Body>
     

     </Card>


     <Card style={{ width: '20rem',height: '15rem', marginLeft:'30px', marginBottom: '20px', marginTop:'-10%'}}>
     <Card.Body>
         <Card.Title> JANUARY</Card.Title>

         <Card.Text>
             BIN DISTRIBUTION
         </Card.Text>
         
         <Card.Text>
             124,835
         </Card.Text>

         <Card.Text>
             TOTAL INVOICES
         </Card.Text>

         <Card.Text>
             124,835
         </Card.Text>
     </Card.Body>
     

     </Card>
</Row>
</Container>

<Container>
<Card style={{flexDirection:'row', width:'53rem', height:'30rem'}}>

  
       
        <h3 > Financial Data</h3>
        <h5 > Showing:</h5>
        <Select options={options} />
<Col style={{marginLeft:'-30%'}}>
<Row>
       <Card style={{marginTop:'30%', width:'19rem'}}>
       <Card.Body>
         <Card.Title> TOTAL INVOICES</Card.Title>

         <Card.Text>
             GHC
         </Card.Text>
         
         <Card.Text>
             2,235,835
         </Card.Text>

        
     </Card.Body>
           
            </Card>


            <Card style={{marginTop:'10%', width:'19rem'}}>
       <Card.Body>
         <Card.Title> TOTAL RECEIVABLES</Card.Title>

         <Card.Text>
             GHC
         </Card.Text>
         
         <Card.Text>
             2,235,835
         </Card.Text>



        
     </Card.Body>
           
            </Card>
            </Row>

    </Col>

    <Col>
    <Row>
            <Card style={{marginTop:'30%', width:'19rem'}}>
       <Card.Body>
         <Card.Title> TOTAL PAYMENTS</Card.Title>

         <Card.Text>
             GHC
         </Card.Text>
         
         <Card.Text>
             2,235,835
         </Card.Text>

        
     </Card.Body>
           
            </Card>


            <Card style={{marginTop:'10%', width:'19rem'}}>
       <Card.Body>
         <Card.Title> See all</Card.Title>

         <Card.Text>
             GHC
         </Card.Text>
         
         <Card.Text>
             2,235,835
         </Card.Text>

        
     </Card.Body>
           
            </Card>
            </Row>
            </Col>
    </Card>

    <Card style={{width:'30rem', marginLeft:'70%', marginTop:'-37%',marginRight:'5%'}}>
    <Card.Body>
         <Card.Title> REGIONAL DISTRIBUTION</Card.Title>

         <Card.Text>
            Ahafo
         </Card.Text>
         
         <Card.Text>
             Ashanti
         </Card.Text>

         <Card.Text>
            Bono
         </Card.Text>

         <Card.Text>
            Bono East
         </Card.Text>

         <Card.Text>
             Central
         </Card.Text>

         <Card.Text>
             Eastern
         </Card.Text>

        
         <Card.Text>
          Greater Accra
         </Card.Text>

         <Card.Text>
           North East
         </Card.Text>

         <Card.Text>
           Northern
         </Card.Text>

         <Card.Text>
          Oti
         </Card.Text>

         <Card.Text>
           Savannah
         </Card.Text>
         <Card.Text>
            Upper East
         </Card.Text>

         <Card.Text>
            Upper West
         </Card.Text>

         <Card.Text>
            Volta
         </Card.Text>

         <Card.Text>
            Western
         </Card.Text>

         <Card.Text>
            Western North
         </Card.Text>


     </Card.Body>
    </Card>
    </Container>
    
    
   

    

        
   
       
     
       
    
    
     </div>
    );
}
