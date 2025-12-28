import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/home-main.png";
import Home2 from "./Home2.jsx";
import Type from "./Type.jsx";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading" style={{ paddingBottom: 15 }}>
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">POR JING XIAN</strong>
              </h1>

              <div
                style={{
                  padding: 50,
                  textAlign: "left",
                  position: "relative",
                  minHeight: "30px",
                  pointerEvents: "none"
                }}
              >
                <Type />
              </div>

              <div style={{ textAlign: "left", paddingLeft: 30 }}>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/porjingxian"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="mailto:porjingxian@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillMail />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/por-jing-xian-623403213/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="button-contact" style={{ marginLeft: "16px" }}>
                    <a
                      href="https://wa.me/601133599839"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour"
                      style={{ textDecoration: "none" }}
                    >
                      <p>
                        <FaWhatsapp style={{ marginRight: "3px" }} /> Contact Me
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home;
