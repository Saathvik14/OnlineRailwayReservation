import React,  { useState, useEffect } from 'react';
import { useLocalState } from '../util/useLocalStorage'; 
import {useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg"
import "../styles/Navbar.css"
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'; 
import Bgg from "../assets/bgg.jpg"
import { Container } from "react-bootstrap";
import axios from 'axios';

function UserDashboard()
{
  const [openLinks, setOpenLinks] = useState(false)
  const [gettraindata, setGettraindata]= useState([]);
  const[trainId ,setTrainId]= useState('');
  const [query, setQuery] = useState('');
  const[destination,setDestination] = useState('');
  const[source,setSource]= useState('');
  const navigate = useNavigate();
   
  useEffect( ()=>{
    trainData();

    

  },[]);
 
  const trainData=async()=>{
    const reqData =await fetch("/train/listalltrains");
    
    const resData= await reqData.json();
    console.log(resData);
    setGettraindata(await resData)
  }
const handleSubmit=async(e)=>{
  e.preventDefault();
 // console.log(query);
 return await axios.get(`/train/findby/${source}/${destination}`)
 .then((response)=>{setGettraindata(response.data);})
 .catch((err)=>console.log(err));
}

  


    
    return (
      <div>
      <div className='navbar'>
     
          <div className='leftSide' id={openLinks ? "open" : "close"}>
          <img style={{ width: "10%", height: "80%" }} src={Logo} />
          </div>
          <div className='Admindashboard'>
            <Link to="/viewbooking"> View Booking </Link>
            <Link to="/usertlist"> Available Trains </Link>
            <Link to="/bookingform"> Book Your Seats! </Link>
            <Link to="/">Logout</Link>
                  
          </div>
          <div  className="home" style={{ backgroundImage: `url(${Bgg})` }}> 

<React.Fragment>              
 <Container>
<div className='row mt-3'> 
    <div className='col-md-12 mt-3 mb-3'>
      <h3 className='mb-3'>Search Available Trains</h3>  
      <form onSubmit={handleSubmit}>   
      <div className="col-md-3 mt-2">                
        <input type="text" name='name' value={source}   className="form-control" onChange={(e)=>setSource(e.target.value)} placeholder=' Source' />
      </div>           
        <div className="col-md-3 mt-2">                
        <input type="text" name='name' value={destination}   className="form-control" onChange={(e)=>setDestination(e.target.value)} placeholder=' Destination' />
      </div>          
    
<div className="col-md-1 mt-2">
<button type="submit" className="btn btn-primary">Submit</button>
</div>
<div className="col-md-1 mt-2">
<button type="submit" className="btn btn-primary" >Reset</button>
</div>
</form>
</div>



    <div className='col-md-12'>
    <table className="table">
      <thead>
        <tr>
          <th>Sr. No </th>
          <th>train id</th>
          <th>train Name</th>
          <th>source</th>
          <th>destination</th>
          <th>price</th>
          <th>Time of arrival</th>
          <th>Time of departure</th>
          <th>Total no of seats</th>
          <th>Class name</th>
        </tr>
      </thead>
      <tbody>
        {
          gettraindata.length >0 ?(
            gettraindata.map((getTrain,index)=>(
           <tr key={index}>
          <td>{index+1} </td>
          <td>{getTrain.trainId}</td>
          <td>{getTrain.trainName}</td>
          <td>{getTrain.source}</td>
          <td>{getTrain.destination}</td>
          <td>{getTrain.price}</td>
          <td>{getTrain.timeOfArrival}</td>
          <td>{getTrain.timeOfDeparture}</td>
          <td>{getTrain.totalNumOfSeats}</td>
          <td>{getTrain.className}</td>

         
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
</div>
</div>
);
}


export default UserDashboard;