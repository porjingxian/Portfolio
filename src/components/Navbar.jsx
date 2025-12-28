import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CgFileDocument } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillContainer,
  AiFillTrophy,
  AiFillPhone
} from "react-icons/ai";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  // Update navbar color on scroll
  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`navbar sticky`}
    >
      <Container>
        <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpand(expand ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => setExpand(false)}>
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>

            <Nav.Link href="#about" onClick={() => setExpand(false)}>
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
            
            <Nav.Link href="#education" onClick={() => setExpand(false)}>
              <CgFileDocument style={{ marginBottom: "2px" }} /> Education
            </Nav.Link>

            <Nav.Link href="#skills" onClick={() => setExpand(false)}>
              <AiFillContainer style={{ marginBottom: "2px" }} /> Skills
            </Nav.Link>

            <Nav.Link href="#project" onClick={() => setExpand(false)}>
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
            </Nav.Link>

            <Nav.Link href="#achievement" onClick={() => setExpand(false)}>
              <AiFillTrophy style={{ marginBottom: "2px" }} /> Achievements
            </Nav.Link>

            <Nav.Link href="#footer" onClick={() => setExpand(false)}>
              <AiFillPhone style={{ marginBottom: "2px" }} /> Contact
            </Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
