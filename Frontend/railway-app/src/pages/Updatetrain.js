import {   Link } from "react-router-dom";
import {  useEffect, useState } from "react";
import axios from "axios";
import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import {useParams}from 'react-router-dom';
import { render } from "react-dom";
import { Container } from "reactstrap";
import Logo from "../assets/logo.jpg";
//import "./Login.css";

 function Updatetrain() {
  const navigate = useNavigate();
const [msg,setMsg]=useState();
const [trainedit ,setTrainedit]=useState(
  {trainName: "",
      source:"",
      destination:"",
      price:"",
      timeOfArrival:"",
      timeOfDeparture:"",
      days:"",
      totalNumOfSeats:"",
      className:""
}
);
  const Navigate=useNavigate();
  const {trainId}=useParams();
console.log(trainId);

useEffect(()=>{
  const edittrainId=async()=>{
const reqdata=await fetch ( `/train/viewtrainbyno/${trainId}`);
const res=reqdata.json();
setTrainedit(await res);


  }
  edittrainId();
},[]
)
const handleEdit=(e)=>{

setTrainedit({...trainedit,[e.target.name]:e.target.value});
}

const handleTrainupdate= async (e)=>{
  e.preventDefault();
const response=await axios.put(`/train/update/${trainId}`,trainedit)
setMsg(response.data.msg)

setTimeout(()=>{
  Navigate("/trainlist");

},2000);




}
return(
<>
<div>
    <div className='navbar'>
    <div className='leftSide' >
    <img style={{ width: "10%", height: "80%" }} src={Logo} />
    </div>
    <div className='Admindashboard'>
      <Link to="/addtrain">Add Train </Link>
      <Link to="/listalltrain">Train Details </Link>
      <Link to="/dashboard"> Back </Link>      
    </div>
    </div>
<Container className="content">
  <div className="row">
  <div className="col-sm-12">
    <h2 className="mt-4 mb-4 fw-bold">
      update function
    </h2>
    </div>
  </div>
</Container>

<form  onSubmit={handleTrainupdate}className="row g-3">
  <div className="=col-md-3">
    <lable className="form-lable">TrainName </lable>
    <input
    type="text"
    name="trainname"
    className="form-control p-2"
    value={trainedit.trainName}
    onChange={(e)=>handleEdit(e)}/>
  </div>

  <div className="=col-md-3">
    <lable className="form-lable">Source </lable>
    <input
    type="text"
    name="source"
    className="form-control p-2"
     value={trainedit.source}
     onChange={(e)=>handleEdit(e)}/>
  </div>
  <div className="=col-md-3">
    <lable className="form-lable">Destination </lable>
    <input
    type="text"
    name="destination"
    className="form-control p-2"
     value={trainedit.destination}
     onChange={(e)=>handleEdit(e)}/>
  </div>
  <div className="=col-md-3">
    <lable className="form-lable">Price</lable>
    <input
    type="text"
    name="price"
    className="form-control p-2"
     value={trainedit.price}
     onChange={(e)=>handleEdit(e)}/>

  </div>
  <div className="=col-md-3">
    <lable className="form-lable">Time of Arrival </lable>
    <input
    type="text"
    name="timeOfArrival"
    className="form-control p-2"
     value={trainedit.timeOfArrival}
     onChange={(e)=>handleEdit(e)}/>
  </div>
  <div className="=col-md-3">
    <lable className="form-lable">Time of Departure</lable>
    <input
    type="text"
    name="timeOfDeparture"
    className="form-control p-2"
     value={trainedit.timeOfDeparture}
     onChange={(e)=>handleEdit(e)}/>
  </div>
  <div className="=col-md-3">
    <lable className="form-lable">Date</lable>
    <input
    type="text"
    name="date"
    className="form-control p-2"
     value={trainedit.days}
     onChange={(e)=>handleEdit(e)}/>
  </div>

  <div className="=col-md-3">
    <lable className="form-lable">Seats</lable>
    <input
    type="text"
    name="numOfSeats"
    className="form-control p-2"
     value={trainedit.totalNumOfSeats}
     onChange={(e)=>handleEdit(e)}/>
  </div>
  <div className="=col-md-3">
    <lable className="form-lable">ClassName</lable>
    <input
    type="text"
    name="className"
    className="form-control p-2"
     value={trainedit.className}
     onChange={(e)=>handleEdit(e)}/>
  </div>
<div>
  <button type="submit" className="btn btn-primary mt-4">Submit</button></div>
  <Link   to="/trainlist">
              check updated list
            </Link>
</form>
</div>

</>


);

 }
export default Updatetrain;