import React,  { useState } from 'react';
import { useLocalState } from '../util/useLocalStorage'; 
import {useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg"
import "../styles/Navbar.css"
import {Link} from 'react-router-dom';
import '../styles/AdminDash.css'
import Backg from "../assets/4.jpg"

const Dashboard = () => {
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
      setOpenLinks(!openLinks)
    };
    return (
     <div>
      <div className='navbar'>
          <div className='leftSide' id={openLinks ? "open" : "close"}>
          <img style={{ width: "10%", height: "80%" }} src={Logo} />
          </div>
          <div className='Admindashboard'>
            <Link to="/addtrain">Add Train </Link>
          
            <Link to="/listalltrain">View Train Details</Link>
            <Link to="/"> Logout </Link>      
          </div>
          <div className="headerContainer">
        <h1 color='black'> Admin Dashboard  </h1>
        <br />
        <p> Safety | Security | Punctuality</p>
      </div>
          </div>
          
           <div className="home" style={{ backgroundImage: `url(${Backg})` }}> 
            
            </div>
      </div>
    );
  }

export default Dashboard;