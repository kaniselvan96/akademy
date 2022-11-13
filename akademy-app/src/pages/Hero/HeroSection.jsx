import React from "react";
import Header from "../../components/Header";

function HeroSection() {
  return (
    <header id="home">
      <Header />
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://tallypress.com/wp-content/uploads/2019/08/top-10-cooking-classes-kids-kl-selangor.jpg')",
          height: "600px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h2 className="mb-3">Anytime. Anywhere</h2>
              <h1 className="mb-3">Master The Culinary Arts</h1>
              <a role="button" className="btn btn-danger" href="#classes">
                View Classes
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
