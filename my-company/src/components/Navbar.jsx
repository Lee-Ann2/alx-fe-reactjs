import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <> 
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contacts</Link>
            </div>
        </nav>
    </>
   
  );
}

export default Navbar