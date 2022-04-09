import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import Popups from "./Popups";

const Navigation = () => {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className="shadow py-3 navbar_style"
    >
      <Container className="text-dark">
        <Link href="/" passHref>
          <Navbar.Brand>UpHire</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/about" passHref>
              <Nav.Link>About UpHire</Nav.Link>
            </Link>
            <Link href="/work" passHref>
              <Nav.Link>How it Work</Nav.Link>
            </Link>
            <Link href="/projects" passHref>
              <Nav.Link>Projects</Nav.Link>
            </Link>
            <Link href="/jobs" passHref>
              <Nav.Link>Jobs</Nav.Link>
            </Link>
          </Nav>
          <Popups />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
