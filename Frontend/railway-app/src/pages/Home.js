import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/3.jpg";
import Navbar from '../components/Navbar';
import "../styles/Home.css";
import Footer from "../components/Footer"

function Home() {
  return (
    <>
   <Navbar />
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Online Railway Reservation </h1>
        <br />
        <p> Safety | Security | Punctuality</p>
      </div>
    </div>
   
    </>
  );
}

export default Home;
