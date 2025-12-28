import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp  } from "react-icons/fa";
function Footer() {
  return (
    <section className="home-about-social" id="footer">
      <Container>
        <Row style={{ paddingTop: 50, paddingBottom: 80 }}>
          <Col md={12}>
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
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
                  style={{textDecoration:"none"}}
                >
                  <p>
                    <FaWhatsapp style={{ marginRight: "3px" }} /> Contact Me
                  </p>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
