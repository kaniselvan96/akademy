import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import Rating from "@mui/material/Rating";
import JoinModal from "../../components/JoinModal";

function CourseCard(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <MDBCard>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image rounded hover-zoom"
      >
        <MDBCardImage
          src={props.img}
          fluid
          style={{ objectFit: "cover", width: "100%", height: "20vw" }}
        />
        <a href="#!">
          <div className="mask">
            <div className="d-flex justify-content-start align-items-end h-20 pt-1">
              <h5>
                {/* if (props.level == basics)  */}
                <span className="badge bg-primary ms-2">{props.level}</span>
              </h5>
            </div>
          </div>
          <div className="hover-overlay">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <a href="#!" className="text-reset">
          <h3 className="card-title mb-2">{props.title}</h3>
          <p>{props.description}</p>
        </a>
        <div className="d-flex flex-row justify-content-center">
          <div className="text-danger mb-3 me-2">
            <Rating name="read-only" value={props.rating} readOnly />
          </div>
        </div>
        <h6 className="mb-3">
          <MDBBtn
            color="danger"
            className="flex-fill"
            onClick={() => setModalShow(true)}
          >
            Join Now
          </MDBBtn>
          <JoinModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </h6>
      </MDBCardBody>
    </MDBCard>
  );
}

export default CourseCard;
