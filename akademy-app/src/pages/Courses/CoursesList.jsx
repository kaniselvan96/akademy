import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Data from "./Data";
import CourseCard from "./CourseCard";
import "./course.css";

import Slider from "react-slick";

function CoursesList() {
  const slides = [];

  {
    Data.map((e) => {
      return slides.push(
        <CourseCard
          title={e.title}
          level={e.level}
          rating={e.rating}
          description={e.description}
          img={e.img}
        />
      );
    });
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <MDBContainer fluid className="my-3 text-center" id="classes">
      <h2 className="mt-5 mb-5">
        <strong>Available Classes</strong>
      </h2>
      <MDBRow className="px-5 mx-5">
        <Slider {...settings}>{slides}</Slider>
      </MDBRow>
    </MDBContainer>
  );
}

export default CoursesList;
