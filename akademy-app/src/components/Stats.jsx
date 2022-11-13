import React from "react";
import { Container, Row, Col } from "reactstrap";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBookOpen,
  faUserTie,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

function Stats() {
  return (
      <Container className="pt-3">
        <Row className="align-items-center mt-1 mb-5">
          <Col lg="3" md="4" sm="6" xs="6">
            <Stack gap={1} className=" d-flex align-items-center gap-1">
              <FontAwesomeIcon icon={faBookOpen} size="3x" />
              <h2 className="mt-3"><CountUp start={0} end={100} duration={2} enableScrollSpy/></h2>
              <h4>Courses</h4>
            </Stack>
          </Col>

          <Col lg="3" md="4" sm="6" xs="6">
            <Stack gap={1} className=" d-flex align-items-center gap-1">
              <FontAwesomeIcon icon={faClock} size="3x" />
              <h2 className="mt-3"><CountUp start={0} end={230} duration={2} enableScrollSpy/></h2>
              <h4>Hours</h4>
            </Stack>
          </Col>

          <Col lg="3" md="4" sm="6" xs="6">
            <Stack gap={1} className=" d-flex align-items-center gap-1">
              <FontAwesomeIcon icon={faUserTie} size="3x" />
              <h2 className="mt-3"><CountUp start={0} end={10} duration={2} enableScrollSpy/></h2>
              <h4>Chefs</h4>
            </Stack>
          </Col>

          <Col lg="3" md="4" sm="6" xs="6">
            <Stack gap={1} className=" d-flex align-items-center gap-1">
              <FontAwesomeIcon icon={faGraduationCap} size="3x" />
              <h2 className="mt-3"><CountUp start={0} end={550} duration={2} enableScrollSpy/></h2>
              <h4>Students</h4>
            </Stack>
          </Col>
        </Row>
      </Container>
  );
}

export default Stats;
