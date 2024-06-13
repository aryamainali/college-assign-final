import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/image.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Explore the pathway to a British degree in Nepal. 
               <br />
               <br />
                <h3>Unlock world-class education opportunities with our accredited programs.</h3> <br />
              </h2>
              <p className="mb-5">
               
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
