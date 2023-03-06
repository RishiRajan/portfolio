import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../Assets/logo.png'



function NavSection() {

       let [activeLink, setActivelink] = useState("Home");
       let [scrolled,setScrolled ] = useState(false);

       useEffect(() =>{
        const onScrollEvent = () =>{
                console.log("scrolled");
                if(window.scrollY >50) setScrolled(true);
                else setScrolled(false);
        }
        
        window.addEventListener("scroll",onScrollEvent);

        return () => window.removeEventListener("scroll",onScrollEvent);


       },[])

       let updateActiveLink =(link)=>{
        setActivelink(link);
       }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse></Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink == "home" ? "active-nav-link" : "nav-link"}
              onClick={() => updateActiveLink("home")}>
              Home
            </Nav.Link>
            <Nav.Link
              href="#About"
              className={activeLink == "about" ? "active-nav-link" : "nav-link"}
              onClick={() => updateActiveLink("about")}>
              About
            </Nav.Link>
            <Nav.Link
              href="#Updates"
              className={
                activeLink == "updates" ? "active-nav-link" : "nav-link"
              }
              onClick={() => updateActiveLink("updates")}>
              Updates
            </Nav.Link>
          </Nav>

          <span className="Navbar-text">
            {/* Maybe add social icons later on */}
            <button
              className="Contact-button"
              onClick={console.log("Lets connect!")}>
              <span>Contact</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSection;
