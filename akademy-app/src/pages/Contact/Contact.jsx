import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTextArea
} from "mdb-react-ui-kit";
import Form from "./Form";

export default function Contact() {
  return (
    <MDBContainer className="py-5" style={{ maxWidth: "85%" }} id="contact">
      <MDBRow className="justify-content-center align-items-center">
        <MDBCol>
          <MDBCard className="my-4 shadow-3">
            <MDBRow className="g-0">
              <MDBCol className="d-xl-block bg-image">
                <MDBCardImage
                  src="https://www.getmailbird.com/wp-content/uploads/2019/12/Keep-in-touch-email-templates.jpg"
                  alt="Contact Us"
                  fluid
                  className="justify-content-center align-items-center"
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody className="p-md-5">
                    <h1>Get in Touch</h1>
                    <Form/>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
