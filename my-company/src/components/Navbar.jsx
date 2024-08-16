import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <> 
        <nav>
            <div style={{
                padding: "20px",
                listStyle: "none",
                textTransform: "none",
                fontWeight:300,
                textAlign:"center",
                justifyContent: "space-between"}}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contacts</Link>
            </div>
        </nav>
    </>
   
  );
}

export default Navbar;