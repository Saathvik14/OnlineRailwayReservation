import React, { useState, useEffect } from "react";
import httpClient from "../http-common";
import Backg from "../assets/bgg.jpg";
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.jpg"
import axios from "axios";



function BookingForm() {
  const [userId, setuserId] = useState('');
  const [trainName, setTrainName] = useState('');
  const [passengerId ,setPassengerId]=useState('')
  const [passengerName ,setPassengerName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [sourceStation, setSourceStation] = useState('');
  const [destinationStation, setDestinationStation] = useState('');
  const[journeyDate, setJourneyDate] = useState('');
  const [seats, setSeats] = useState('');
  const [trainClass, setTrainClass] = useState('');
  const [amount, setamount] = useState('');
 
  const [message, setMessage] = useState(""); 

  
  
  

  const handleuserId = (event) => {
    const userId = event.target.value;
    setuserId(userId);
  };
  
  
  const handletrainName = (event) => {
    const trainName = event.target.value;
    setTrainName(trainName);
  };

  const handlepassengerId = (event) => {
    const passengerId = event.target.value;
    setPassengerId(passengerId);
  };
  const handlepassengerName = (event) => {
    const passengerName = event.target.value;
    setPassengerName(passengerName);
  };

  const handleemail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const handlephone = (event) => {
    const phone = event.target.value;
    setPhone(phone);
  };


  const handlesourceStation = (event) => {
    const source = event.target.value;
    setSourceStation(source);
  };
  const handledestinationStation = (event) => {
    const destination = event.target.value;
    setDestinationStation(destination);
  };
  const handlejourneyDate = (event) => {
    const journeyDate = event.target.value;
    setJourneyDate(journeyDate);
  };

  const handletrainClass= (event) => {
    const className = event.target.value;
    setTrainClass(className);
  };
  const handleseats = (event) => {
    const seats = event.target.value;
    setSeats(seats);
  };
  const handleamount = (event) => {
    const amount = event.target.value;
    setamount(amount);
  };




 
  const submitBooking = async (e) => {
    e.preventDefault();
    const bookingdata = {
     userId:userId,
      trainName: trainName,
      passengerId:passengerId,
      passengerName:passengerName,
      email:email,
      phone:phone,
      journeyDate:journeyDate,  
     sourceStation:sourceStation,
     destinationStation:destinationStation,
     trainClass:trainClass,
     seats:seats,
     amount:amount
     
    

     
    };
    
    

    await 
    httpClient.post(
        "/book/addbooking",
        JSON.stringify(bookingdata),
        alert("Booking successfull"),
        await console.log("hello")
       
        
        
      )

      
      .then((result) => {
       
        setMessage(result.data.msg);
        console.log(result.data);
        console.log(result.data.msg);
        
      }
      )
      ;
      
  };
  let p="http://localhost:9094/pgredirect/"+email+"/"+amount;


  return (
<div>
    <div className='navbar'>
    <div className='leftSide' >
    <img style={{ width: "10%", height: "80%" }} src={Logo} />
    </div>
    <div className='User Dashboard'>
     
      <Link to="/userdash"> Back </Link>      
    </div>
    </div>
    <React.Fragment>
      <div className="mainDiv">
        <div className="container" >
         
            <form onSubmit={submitBooking} className="formCont">
      
             

             <h1> Reserve Your Tickets!!</h1>

            

                <label className="form-label">Passenger Name </label>
                <input
                  type="text"
                  name="passengerName"
                  className="form-control p-2"
                  onChange={(e) => handlepassengerName(e)}
                />
              

              
              <label className="form-label">Email </label>
                <input
                  type="text"
                  name="email"
                  className="form-control p-2"
                  onChange={(e) => handleemail(e)}
                />
              

          
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control p-2"
                  onChange={(e) => handlephone(e)}
               />
                <label className="form-label">Train name</label>
                <input
                  type="name"
                  name="trainName"
                  className="form-control p-2"
                  onChange={(e) => handletrainName(e)}
                
                />
         
            
                    
                <label className="form-label">Journey Date</label>
                <input
                  type="text"
                  name="journeyDate"
                  className="form-control p-2"
                  onChange={(e) => handlejourneyDate(e)}
                 
                />
            

             
                <label className="form-label">Source </label>
                <input
                  type="text"
                  name="source"
                  className="form-control p-2"
                  onChange={(e) => handlesourceStation(e)}
                
                />
              

            
                <label className="form-label">Destination</label>
                <input
                  type="text"
                  name="destination"
                  className="form-control p-2"
                  onChange={(e) => handledestinationStation(e)}
                 
                />
                  
                <label className="form-label">Class Name</label>
                <input
                  type="text"
                  name="trainClass"
                  className="form-control p-2"
                 onChange={(e) => handletrainClass(e)}
                
                />
                   
                <label className="form-label">Seats Required</label>
                <input
                  type="number"
                  name="Seats"
                  className="form-control p-2"
                  onChange={(e) => handleseats(e)}
                />

<label className="form-label">Amount </label>
                <input
                  type="number"
                  name="amount"
                  className="form-control p-2"
                  onChange={(e) => handleamount(e)}
                />
            
            
             
           

<button className="btn btn-primary m-2"
        onClick={(e)=>{
          window.open(p);
          window.location.href="/viewbooking";
          
          
  

          ///Navigate("/http://localhost:9094/pgdirect/"+cartTotal);
        }}>BOOK NOW</button>

</form>
         
               
              </div>
           
          {message ? (
              <div className="text-success text-white">
                {" "}
                <h5>{message} </h5>
              </div>
            ) : (
              <></>
            )}
          
        
        </div>
     
    </React.Fragment>
    </div>
  );
}

export default BookingForm;