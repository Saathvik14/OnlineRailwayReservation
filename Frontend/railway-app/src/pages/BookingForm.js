import React, { useState, useEffect } from "react";
import httpClient from "../http-common";
import Backg from "../assets/bgg.jpg";
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.jpg"
import { useNavigate } from "react-router-dom";
import {useParams}from 'react-router-dom';
import axios from "axios";



function BookingForm() {
 
  const [msg,setMsg]=useState();
  const [email,setEmail]=useState('');
  const [seats, setSeats] = useState('');
  const [amount, setamount] = useState('');
  const [trainedit ,setTrainedit]=useState(
    { 
      trainId:"",
      trainName: "",
      passengerName:"",
      email:"",
      phone:"",
     
        source:"",
        destination:"",
  
        className:"",
        
      
        seats:"",
        amount:""
  }
  );
  
  const Navigate=useNavigate();
  const {trainId}=useParams();

console.log(trainId);




//amount=trainedit.totalNumOfSeats*trainedit.price;



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
const response=await axios.post(`/book/addbooking`,trainedit)
setMsg(response.data.msg)

setTimeout(()=>{
 

},2000);




}


let p="http://localhost:9094/pgredirect/"+trainedit.email+"/"+trainedit.totalNumOfSeats*trainedit.price;

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
         
            <form onSubmit={handleTrainupdate} className="formCont">
      
             

             <h1> Reserve Your Tickets!!</h1>

            

                <label className="form-label mt-2">Train Id </label>
                <input
                  type="text"
                  name="trainId"
                  className="form-control p-2"
                  value={trainedit.trainId}
                  onChange={(e) => handleEdit(e)}/>


                  <label className="form-label">Train Name</label>
                <input
                  type="name"
                  name="trainName"
                  className="form-control p-2"
                  value={trainedit.trainName}
                  onChange={(e)=>handleEdit(e)}/>

                  <lable className="form-lable mt-2">Passenger Name </lable>
                 <input
                  type="text"
                   name="passengerName"
                   placeholder="Enter Passenger Name"
                  className="form-control p-2"
                  value={trainedit.passengerName}
                  onChange={(e)=>handleEdit(e)}/>
              

              
              <label className="form-label mt-2">Email </label>
                <input
                  type="text"
                  name="email"
                  className="form-control p-2"
                  placeholder="Personel E-Mail"
                  value={trainedit.email}
                  onChange={(e)=>handleEdit(e)}/>
              

          
                <label className="form-label mt-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control p-2"
                  placeholder="Mobile Number"
                  value={trainedit.phone}
                  onChange={(e)=>handleEdit(e)}/>
                
                    
             
                <label className="form-label mt-2">Source </label>
                <input
                  type="text"
                  name="source"
                  className="form-control p-2"
                  value={trainedit.source}
                 onChange={(e)=>handleEdit(e)}/>
              

            
                <label className="form-label mt-2">Destination</label>
                <input
                  type="text"
                  name="destination"
                  className="form-control p-2"
                  value={trainedit.destination}
                  onChange={(e)=>handleEdit(e)}/>
                  
                <label className="form-label mt-2">Class Name</label>
                <input
                  type="text"
                  name="trainClass"
                  className="form-control p-2"
                  value={trainedit.className}
                  onChange={(e)=>handleEdit(e)}/>

                <lable className="form-lable mt-2">Train Seat/Price</lable>
                <input
                 type="text"
                name="price"
                className="form-control p-2"
                value={trainedit.price}
                onChange={(e)=>handleEdit(e)}/>
                   
               

                   <lable className="form-lable mt-2">Train Class</lable>
                  <input
                  type="text"
                  name="totalnumOfSeats"
                  className="form-control p-2"
                  value={trainedit.className}
                  onChange={(e)=>handleEdit(e)}/>

<label className="form-label mt-2">Seats Required </label>
              <input
                type="number"
                name="totalNumOfSeats"
                placeholder="Enter Number of Seats Available"
                className="form-control p-2"
                value={trainedit.seats}
                onChange={(e) => handleEdit(e)}
              />

<lable className="form-lable mt-2">Price</lable>
    <input
    type="text"
    name="numOfSeats"
    className="form-control p-2"
     value={trainedit.totalNumOfSeats*trainedit.price}
     onChange={(e)=>handleEdit(e)}/>
            
            
             
  <button className="btn btn-primary m-2"
        onClick={(e)=>{
          window.open(p);
          window.location.href="/userdash";
          
          
  

          ///Navigate("/http://localhost:9094/pgdirect/"+cartTotal);
        }}>DO PAYMENT</button>

</form>
         
               
              </div>
           
         
        
        </div>
     
    </React.Fragment>
    </div>
  );
}

export default BookingForm;