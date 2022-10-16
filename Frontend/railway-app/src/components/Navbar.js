import React, { useState } from 'react';
import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';



function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  };
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img style={{ width: "20%", height: "80%" }} src={Logo} />
        </div>
        <div className='rightSide'>
          <Link to="/">Home </Link>
          <Link to="/register">Register </Link>
          <Link to="/user"> Login </Link>
          <Link to="/search"> Search Trains </Link>
          <Link to="/"> About </Link>
          <button onClick={toggleNavbar}>
          <ReorderIcon />
          </button>
        </div>
    </div>
  );
}

export default Navbar
