import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageSlider from "./ImageSlider";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";
import about5 from "../assets/about5.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "white"}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a detail-oriented System Integrator specializing in
              <i>
                <b className="purple">
                  {" "}
                  Industrial Electronics Automation. 
                  {" "}
                </b>
              </i>
              Skilled in designing, implementing, and maintaining automated systems, with hands-on experience 
              in 
              <i>
                <b className="purple">
                  {" "}
                  PLCs, sensors, and industrial control systems.
                  {" "}
                </b>
              </i> Strong problem-solving abilities and a passion 
              for optimizing processes through technology.
              <br />
              <br />
              I’m also proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, C++, Python, and Java{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Automated Systems, Smart Industrial Solutions,{" "}
                </b>
              </i>
              and optimizing processes for efficiency and reliability.
              <br />
              <br />
              My focus is on creating practical, innovative solutions that make industries smarter and operations smoother.
            </p>
          </Col>
          <Col md={5} className="myAvtar">
            <ImageSlider images={[about1, about2, about3, about4, about5]} style={{ justifyContent: "center", marginLeft: "1.5rem" }}/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
