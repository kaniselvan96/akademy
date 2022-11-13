import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBSelect
}
from 'mdb-react-ui-kit';
import Data from "../pages/Courses/Data";

export default function JoinForm() {

  return (
    <MDBContainer fluid>

      {/* <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody> */}
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h1 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Join Now</h1>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Name' id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Email' id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Contact Number' id='form3' type='phone'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Class Name' id='form4' type='text' className='w-100'/>
                {/* <MDBSelect
                   data={[ { text: 'Chicken Pizza', value: 1 },
                    { text: 'Moist Chocolate', value: 2 },
                    { text: 'Chicken Curry', value: 3 },
                    { text: 'Curry Puff', value: 4 },
                    { text: 'Ramen Mee', value: 5 },
                    { text: 'Donut', value: 6 },
                    { text: 'Pudding Jelly', value: 7 },
                    { text: 'Pan Cake', value: 8 }
                ]}
                    /> */}
              </div>

              <MDBBtn className='mb-4' color='danger' size='lg'>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        {/* </MDBCardBody>
      </MDBCard> */}

    </MDBContainer>
  );
}

