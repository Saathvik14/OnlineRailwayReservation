import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import httpClient from "../http-common";
import Logo from "../assets/logo.jpg"
import image from "../assets/bgg.jpg";
import { Container } from "react-bootstrap";

function AddTrains() {
  const [trainId, setTrainId] = useState('');
  const [trainName, setTrainName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState('');
  const [timeOfArrival, setTimeOfArrival] = useState('');
  const [timeOfDeparture, setTimeOfDeparture] = useState('');
  const [totalNumOfSeats, setTotalNumOfSeats] = useState('');
  const[days,setDays] = useState('');
  const [className, setClassName] = useState('');
  const [message, setMessage] = useState(""); 

 
  
  const handletrainId = (event) => {
    const trainId = event.target.value;
    setTrainId(trainId);
  };

  const handletrainName = (event) => {
    const trainName = event.target.value;
    setTrainName(trainName);
  };

  const handlesource = (event) => {
    const source = event.target.value;
    setSource(source);
  };
  const handledestination = (event) => {
    const destination = event.target.value;
    setDestination(destination);
  };
  const handleprice = (event) => {
    const price = event.target.value;
    setPrice(price);
  };

  const handletimeOfArrival = (event) => {
    const timeOfArrival = event.target.value;
    setTimeOfArrival(timeOfArrival);
  };

  const handletimeOfDeparture = (event) => {
    const timeOfDeparture = event.target.value;
    setTimeOfDeparture(timeOfDeparture);
  };
  const handledays = (event) => {
    const days = event.target.value;
    setDays(days);
  };






  const handletotalNumOfSeats = (event) => {
    const totalNumOfSeats = event.target.value;
    setTotalNumOfSeats(totalNumOfSeats);
  };

  const handleclassName = (event) => {
    const className = event.target.value;
    setClassName(className);
  };

  const submitTrain = async (e) => {
    e.preventDefault();
    const traindata = {
     
      trainId: trainId,
      trainName: trainName,
     source:source,
     destination:destination,
     price:price,
     timeOfArrival:timeOfArrival,
     timeOfDeparture:timeOfDeparture,
      days:days,
     totalNumOfSeats:totalNumOfSeats,
     className:className,
    };
    
   


    await 
     httpClient.post(
        "/train/addtrain",
        JSON.stringify(traindata)
          
        
        
        
        
      )
      
      .then((result) => {
        setMessage(result.data.msg);
        console.log(result.data);
        console.log(result.data.msg);
        alert("Train Added successfully");
      });
  };
  return (
    <div>
      
    <div className='navbar'>
    <div className='leftSide' >
    <img style={{ width: "10%", height: "80%" }} src={Logo} />
    </div>
    <div className='Admindashboard'>
      <Link to="/listalltrain"> Train Details </Link>
      <Link to="/dashboard"> Back </Link>      
    </div>
    </div>
    <div  className="home" style={{ backgroundImage: `url(${image})` }}> 
      <Container className="content">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="mt-4 mb-4 fw-bold">
             Add Train
            </h2>

            {message ? (
              <div className="text-success text-white">
                {" "}
                <h5>{message} </h5>
              </div>
            ) : (
              <></>
            )}

            <form onSubmit={submitTrain} className="row g-3">
              <div className="col-md-3">
                <label className="form-label">Train Id </label>
                <input
                  type="number"
                  name="trainId"
                  className="form-control p-2"
                  placeholder="Train Id"
                  onChange={(e) => handletrainId(e)}
                />
              </div>

              
              <div className="col-md-3">
                <label className="form-label">Train Name</label>
                <input
                  type="name"
                  name="trainName"
                  className="form-control p-2"
                  placeholder="Train Name"
                  onChange={(e) => handletrainName(e)}
                />
              </div>


             
              <div className="col-md-3">
                <label className="form-label">Source </label>
                <input
                  type="text"
                  name="source"
                  className="form-control p-2"
                  placeholder="Source"
                  onChange={(e) => handlesource(e)}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Destination</label>
                <input
                  type="text"
                  name="destination"
                  className="form-control p-2"
                  placeholder="Destination"
                  onChange={(e) => handledestination(e)}
                />
              </div>


              <div className="col-md-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  name="price"
                  className="form-control p-2"
                  placeholder="Ticket Price"
                  onChange={(e) => handleprice(e)}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Time Of Arrival</label>
                <input
                  type="text"
                  name="timeOfArrival"
                  className="form-control p-2"
                  placeholder="Train Arrival"
                  onChange={(e) => handletimeOfArrival(e)}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Time Of Departure</label>
                <input
                  type="text"
                  name="timeOfDeparture"
                  className="form-control p-2"
                  placeholder="Train Departure"
                  onChange={(e) => handletimeOfDeparture(e)}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Date</label>
                <input
                  type="text"
                  name="days"
                  className="form-control p-2"
                  placeholder="dd-MM-yyyy"
                  onChange={(e) => handledays(e)}
                />
              </div>

             
       
              <div className="col-md-3">
                <label className="form-label">Total Seats</label>
                <input
                  type="number"
                  name="totalNumOfSeats"
                  className="form-control p-2"
                  placeholder="Total Seats"
                  onChange={(e) => handletotalNumOfSeats(e)}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Class Name</label>
                <input
                  type="text"
                  name="className"
                  className="form-control p-2"
                  placeholder="Train Class"
                  onChange={(e) => handleclassName(e)}
                />
              </div>







             

              <div className="col-md-3">
                <button type="submit" className="btn btn-primary mt-4">
                  Submit
                </button>
              </div>
            </form>
          </div>

        
        </div>
      </Container>
      </div>
      </div>
    
  );
}

export default AddTrains;