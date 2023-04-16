import React, {useState, useEffect} from 'react';
import "./Navbar.css";

function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 500) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img 
        className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Netflix Logo'
        />

    <img 
        className='nav_avtar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='ProfileLogo'
        />

    </div>
  )
}

export default Navbar