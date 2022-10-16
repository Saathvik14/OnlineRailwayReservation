import React from 'react';
import {   Link } from "react-router-dom";
import Table from  'react-bootstrap/Table';
import {useState,useEffect} from 'react';
//import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
//import { Table } from 'reactstrap';
import Logo from "../assets/logo.jpg";
import { Button } from 'react-bootstrap';
import image from "../assets/bgg.jpg";

const TrainList=()=>
{
  const[trains,setTrains]=useState([]);
  useEffect(()=>{
   getTrains();
   getData();
  

  },[]);
  
 const getTrains =async()=>{
  let result=await fetch("/train/listalltrains");
  result= await result.json();
  setTrains(result);
 }

 
console.warn(trains);
 async function deleteOperation(trainId)
    {
      let result=await  fetch("/train/delete/"+trainId,{
        method:'DELETE'});
      result=await result.json();
      console.warn(result);
     
      getData();
     
      
    }
  

   


  async  function getData()
    {
        let result=await fetch("/train/listalltrains");
  result= await result.json();
  setTrains(result);
    }



    
  return(
    <div>
      
    <div>
    <div className='navbar'>
    <div className='leftSide' >
    <img style={{ width: "10%", height: "80%" }} src={Logo} />
    </div>
    <div className='Admindashboard'>
      <Link to="/addtrain">Add Train </Link>
      <Link to="/dashboard"> Back </Link>      
    </div>
    </div>
    
    
    
  <div className="train-list">
    <h3>Train List:</h3>
    <Table striped>
        <thead>
          <tr>
        <th><h5>S.no</h5> </th>
        <th> Train Id</th>
        <th>Train Name </th>
        <th>Source </th>
        <th>Destination </th> 
        <th>Price</th>
        <th>Time of Arrival</th>
        <th>Time of Departure</th>
        <th>Date</th>
        <th>Total Seats</th>
        <th>Class Name</th>
        <th> Update Train </th> 
        <th> Delete Train </th> 
        </tr>
        </thead>
        <tbody>
    
   {
    trains.map((item,index)=>
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
      
    <td><Link to={`/updatetrain/${item.trainId}`}>update</Link></td>
   


      
      <td><span onClick={()=>deleteOperation(item.trainId)}className='delete'>Delete</span></td>
      </tr>
    

    
) }
</tbody>
</Table>

    </div>
    
  </div>
  </div>
 
)
    
}  
export default TrainList;