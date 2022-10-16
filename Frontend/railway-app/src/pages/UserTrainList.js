import React from 'react';
import {   Link } from "react-router-dom";
import {useState,useEffect} from 'react';
//import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
//import { Table } from 'reactstrap';
import Logo from "../assets/logo.jpg";
import { Button } from 'react-bootstrap';
import { Table } from 'reactstrap';
import { TextDecreaseSharp } from '@mui/icons-material';

const UserTrainList=()=>
{
  const[train,setTrain]=useState([]);
  useEffect(()=>{
   getTrain();
   getData();
  

  },[]);
  
 const getTrain =async()=>{
  let result=await fetch("/train/listalltrains");
  result= await result.json();
  setTrain(result);
 }

 
console.warn(train);
 async function deleteOperation(trainId)
    {
      let result=await  fetch("/train/delete/"+trainId,{
        method:'DELETE'});
      result=await result.json();
      console.warn(result);
      getData();
      alert("train Data Deleted successfully");
    }
  

   


  async  function getData()
    {
        let result=await fetch("/train/listalltrains");
  result= await result.json();
  setTrain(result);
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
    
    

  <div className="train-list">
    <h2>All Available Trains:</h2>
    <Table striped>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Train Id</th>
            <th>Train Name</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Price</th>
            <th>Time of Arrival</th>
            <th>Time of Departure</th>
            <th>Date</th>
            <th>Total Seats</th>
            <th>Class Name</th>
          </tr>
        </thead>
        <tbody>
        {
    train.map((item,index)=>
   
       <tr key={index}>
      <td>{index+1}</td>
      <td>{item.trainId}</td>
      <td>{item.trainName}</td>
      <td>{item.source}</td>
      <td>{item.destination}</td> 
      <td>{item.price}</td> 
      <td>{item.timeOfArrival}</td> 
      <td>{item.timeOfDeparture}</td> 
      <td>{item.days}</td> 
      <td>{item.totalNumOfSeats}</td>
      <td>{item.className}</td>  
      </tr>
         
   
    
) }
          
        </tbody>
      </Table>
   
    
   

    
    
  </div>
  </div>
)
    
}  
export default UserTrainList;