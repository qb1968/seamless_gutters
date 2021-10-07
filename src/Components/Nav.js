import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
     
     return (
       <Nav variant="pills" activeKey="1" >
         <Nav.Item>
           <Nav.Link eventKey="1" href="/">
             Home
           </Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="2" href="/seamlessgutters">
             Seamless Gutters
           </Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="3" href="/roofreplacement">
            Roof Replacements
           </Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="3" href="/roofrepair">
           Roof Repair
           </Nav.Link>
         </Nav.Item>
        
         <NavDropdown title="Other Services" id="nav-dropdown">
           <NavDropdown.Item eventKey="4.1" href="/windows">Windows</NavDropdown.Item>
           <NavDropdown.Item eventKey="4.2" href="/doors">Doors</NavDropdown.Item>
           <NavDropdown.Item eventKey="4.3" href="/siding">
             Siding
           </NavDropdown.Item>
           
         </NavDropdown>
        
             <Nav.Item>
           <Nav.Link eventKey="3" href="/about">
            About
           </Nav.Link>
         </Nav.Item> 
             <Nav.Item>
           <Nav.Link eventKey="3" href="/gallery">
            Gallery
           </Nav.Link>
         </Nav.Item> 
       </Nav>
     );
}

export default NavBar