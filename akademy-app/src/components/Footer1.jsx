import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGoogle,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUtensils,
  faHouse,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer1() {
  return (
    <MDBFooter bgColor="white" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebook} className="me-2" />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} className="me-2" />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faYoutube} className="me-2" />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} className="me-2" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faUtensils} className="me-2" />
                Akademy
              </h6>
              <p>
                We Offer a wide range of online Cooking Classes to suit any
                skill level. All the course are grouped into sections based on
                skill level.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#home" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#aboutUs" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="#classes" className="text-reset">
                  Classes
                </a>
              </p>
              <p>
                <a href="#contact" className="text-reset">
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faHouse} className="me-2" />
                12, Taman Ampang, 54151 KL, Malaysia
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                info@akademy.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-2" /> + 01 234 567
                88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold ms-1" href="#">
          Akademy
        </a>
      </div>
    </MDBFooter>
  );
}
