import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import aboutImg from "../../images/about.jpg";

function AboutUs() {
  return (
    <Container className="py-5" style={{ maxWidth: "85%" }} id="aboutUs">
      <Row classname="px-5 my-5">
        <Col sm={7} >
          <Image className="img-fluid shadow-4 mb-1" src="https://www.ucook.cooking/wp-content/uploads/2018/05/Kids-Cooking.jpg" fluid rounded />
        </Col>
        <Col sm={5}>
            <h1 className="text-center" style={{fontWeight:600}}>About Us</h1>
            <p>
              We Offer a wide range of online Cooking Courses to suit any skill
              level. All the course are grouped into sections based on skill
              level. Select your level and look at what you could learn to cook!
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi cupiditate animi deserunt libero nesciunt corporis
              explicabo nobis ex quo molestiae! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
