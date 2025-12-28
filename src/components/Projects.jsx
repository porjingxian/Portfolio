import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageSlider from "./ImageSlider.jsx";

import waterpump1 from "../assets/waterpump1.jpg";
import waterpump2 from "../assets/waterpump2.jpg";
import waterpump3 from "../assets/waterpump3.jpg";

import chenor1 from "../assets/chenor1.png";
import chenor2 from "../assets/chenor2.jpg";
import chenor3 from "../assets/chenor3.jpg";
import chenor4 from "../assets/chenor4.jpg";
import chenor5 from "../assets/chenor5.jpg";

import watermeter1 from "../assets/watermeter1.jpg";
import watermeter2 from "../assets/watermeter2.jpg";

function ImageSliderGrid() {
  return (
    <section
      id="project"
      className="project-section"
      style={{ fontSize: "1.3em", color: "white" }}
    >
      <Container>
        <Row>
          <Col md="12">
            <h1 className="section-title">
              <span
                className="home-about-description"
                style={{ textAlign: "center", fontSize: "1.6em" }}
              >
                Projects
              </span>
            </h1>
          </Col>
          <Col md={4}>
            <ImageSlider images={[waterpump1, waterpump2, waterpump3]} />

            <h3 className="mt-3 text-start" style={{ padding: "10px" }}>
              Automated Water Pump System
            </h3>
            <ul className="text-start">
              <li>Team Leader</li>
              <li>PLC-based pump control</li>
              <li>Automatic level sensing</li>
              <li>Monitoring and Control Dashboard</li>
            </ul>
          </Col>

          {/* Column 2 */}
          <Col md={4}>
            <ImageSlider
              images={[chenor1, chenor2, chenor3, chenor4, chenor5]}
            />

            <h3 className="mt-3 text-start" style={{ padding: "10px" }}>
              Automated Poultry Climate System
            </h3>
            <ul className="text-start">
              <li>Team Leader</li>
              <li>Real-time Ammonia detection</li>
              <li>Sensor data visualization</li>
              <li>Monitoring and Control Dashboard</li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col md={4}>
            <ImageSlider images={[watermeter1, watermeter2]} />

            <h3 className="mt-3 text-start" style={{ padding: "10px" }}>
              ESP32 Cam Smart Water Meter System
            </h3>
            <ul className="text-start">
              <li>Digital flow measurement</li>
              <li>IoT-based monitoring</li>
              <li>Accurate usage tracking</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ImageSliderGrid;
