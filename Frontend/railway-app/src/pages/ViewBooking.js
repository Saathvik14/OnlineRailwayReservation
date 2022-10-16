import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import axios from 'axios';
import {   Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";


function ViewBooking()
{
  const [gettraindata, setGettraindata]= useState([]);
  const[trainId ,setTrainId]= useState('');
  const [query, setQuery] = useState('');
  const[email,setEmail] = useState('');
   
  useEffect( ()=>{
    trainData();

    

  },[]);
 
  const trainData=async()=>{
    const reqData =await fetch("/book/listallbooking");
    
    const resData= await reqData.json();
    console.log(resData);
    setGettraindata(await resData)
  }
const handleSubmit=async(e)=>{
  e.preventDefault();
 // console.log(query);
 return await axios.get(`/book/listallbookings/${email}`)
 .then((response)=>{setGettraindata(response.data);})
 .catch((err)=>console.log(err));
}

  


  return(
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
         <Container>
        <div className='row mt-3'> 
            <div className='col-md-12 mt-3 mb-3'>
              <h3 className='mb-3'>Search Reservations through Email Id</h3>  
              <form onSubmit={handleSubmit}>              
                <div className="col-md-6 mt-2">                
                <input type="text" name='name' value={email}   className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder='Search...' />
              </div>          
            
<div className="col-md-1 mt-2">
<button type="submit" className="btn btn-primary">Submit</button>
</div>
<div className="col-md-1 mt-2">
<button type="submit" className="btn btn-primary">Reset</button>
</div>
</form>
</div>



            <div className='col-md-12'>
            <table className="table">
              <thead>
                <tr>
                  <th>Sr. No </th>
               
                  <th>Train Name</th>
                  <th>Passenger Name</th>
                  <th>Email</th>
                  <th>phone</th>
                  <th>Journey date</th>
                  <th>Source</th>
                  <th>Destination</th>
                  <th>Class name</th>
                  <th>Seats Reserved</th>                
                </tr>
              </thead>
              <tbody>
                {
                  gettraindata.length >0 ?(
                    gettraindata.map((getTrain,index)=>(
                   <tr key={index}>
                  <td>{index+1} </td>
                  <td>{getTrain.bookingId}</td>
                  <td>{getTrain.trainName}</td>
                  <td>{getTrain.passengerName}</td>
                  <td>{getTrain.email}</td>
                  <td>{getTrain.phone}</td>
                  <td>{getTrain.journeyDate}</td>
                  <td>{getTrain.sourceStation}</td>
                  <td>{getTrain.destinationStation}</td>
                  <td>{getTrain.className}</td>               
                  <td>{getTrain.seats}</td>
                 

                 
                  </tr>

                    )
                    )
                  
                  ):(

                    <tr>
                      <td>Records not found</td>
                    </tr>
                  )
                }
                  
                  
                    
              </tbody>
            </table>
            </div>
        </div>
      </Container>

        </React.Fragment>
        </div>

    );
}



  

export default ViewBooking;