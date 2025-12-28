import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import dekan1 from "../assets/dekan1.mp4"
import dekan2 from "../assets/dekan2.mp4"
import battlebots from "../assets/battlebots.jpg"
import inovasi1 from "../assets/inovasi1.png"
import inovasi2 from "../assets/inovasi2.jpg"
import inovasi3 from "../assets/inovasi3.jpg"

function Achievements() {
  return (
    <section
      id="achievement"
      className="project-section"
      style={{ fontSize: "1.3em", color: "white" }}
    >
      <Container>
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <h1 className="section-title" style={{ fontSize: "1.6em" }}>
              Achievements
            </h1>
          </Col>
        </Row>

        <Row className="g-4" style={{paddingBottom:"1.3rem"}}>
          <Col md={4}>
            <video
                className="achievement-img"
                src={dekan2}
                autoPlay
                loop
                muted
                playsInline
            />
            <h3 className="mt-3 text-start" style={{ padding: "10px" }}>
              Dean's List 2024/2025
            </h3>
            <ul className="text-start">
              <li>CGPA: 3.94</li>
            </ul>
          </Col>

          <Col md={4}>
            <video
                className="achievement-img"
                src={dekan1}
                autoPlay
                loop
                muted
                playsInline
            />
            <h3 className="mt-3 text-start" style={{ padding: "10px" }}>
              Dean's List 2023/2024
            </h3>
            <ul className="text-start">
              <li>CGPA: 3.98</li>
            </ul>
          </Col>

          <Col md={4}>
            <img src={battlebots} className="achievement-img" />
            <h3 className="mt-3 text-start" style={{ padding: "10px" }}>
              UTP Battlebots Tug of War
            </h3>
            <ul className="text-start">
              <li>Arduino-based Tug-of-War Competition</li>
            </ul>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <img src={inovasi2} className="achievement-img" />
            <h3 className="mt-3 text-start" style={{ padding: "10px" }}>
              Gold Award - HireMe
            </h3>
            <p>HireMe is an innovative digital platform designed to simplify and streamline the job seeking and hiring process for Malaysians.</p>
          </Col>

          <Col md={4}>
            <img src={inovasi1} className="achievement-img" />
            <h3 className="mt-3 text-start" style={{ padding: "10px" }}>
              Silver Award - Diet Shopper
            </h3>
            <p>Diet Shopper reduces health risks and makes grocery shopping easier, safer, and more stress-free for individuals with food sensitivities.</p>
          </Col>

          <Col md={4}>
            <img src={inovasi3} className="achievement-img" />
            <h3 className="mt-3 text-start" style={{ padding: "10px" }}>
              Bronze Award - Pet Care
            </h3>
            <p>Pet Care is a convenient app that allows pet owners to easily book appointments for veterinary services, and receive appointment reminders.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Achievements;
