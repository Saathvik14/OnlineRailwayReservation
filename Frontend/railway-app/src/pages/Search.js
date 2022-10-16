import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import axios from 'axios';
import Navbar from "../components/Navbar"
import Bgg from  "../assets/bgg.jpg"

function Search()
{
  const [gettraindata, setGettraindata]= useState([]);
  const[trainId ,setTrainId]= useState('');
  const [query, setQuery] = useState('');
  const[destination,setDestination] = useState('');
   
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
 return await axios.get(`/train/listalltrains/${destination}`)
 .then((response)=>{setGettraindata(response.data);})
 .catch((err)=>console.log(err));
}

  


  return(
    <div>
    <Navbar />
    <div  className="home" style={{ backgroundImage: `url(${Bgg})` }}> 

        <React.Fragment>              
         <Container>
        <div className='row mt-3'> 
            <div className='col-md-12 mt-3 mb-3'>
              <h3 className='mb-3'>Search Available Trains</h3>  
              <form onSubmit={handleSubmit}>              
                <div className="col-md-6">                
                <input type="text" name='name' value={destination}   className="form-control" onChange={(e)=>setDestination(e.target.value)} placeholder='Search...' />
              </div>          
            
<div className="col-md-1">
<button type="submit" className="btn btn-primary">Submit</button>
</div>
<div className="col-md-1">
<button type="submit" className="btn btn-primary">Reset</button>
</div>
</form>
</div>



            <div className='col-md-12'>
            <table className="table">
              <thead>
                <tr>
                  <th>Sr. No </th>
                  <th>Train Id</th>
                  <th>Train Name</th>
                  <th>Source</th>
                  <th>Destination</th>
                  <th>Price</th>
                  <th>Time Of Arrival</th>
                  <th>Time Of Departure</th>
                  <th> Date </th>
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
                  <td>{getTrain.days}</td>
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
    );
}



  

export default Search;


















































/*
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import Navbar from '../components/Navbar';
import React from 'react';
function Search() {
 
    const[search,setSearch]=useState([]);
    const[record,setRecord]=useState([]);
 
    var i =1; // For Serial no increment
 
    // For loading reacord on Windoe Load
    const loadRecords = async () => {
      axios.get("/train/listalltrains")
        .then(response => {
          setSearch(response.data);
        });
       
    }
    useEffect(() => {
        loadRecords();
    }, []);
 
     
    // Search Item by Name
    const searchRecords = () =>
    {
        axios.get(`/?MovieName=${record}`)
        .then(response => {
          setSearch(response.data);
        });
    }
     
 
  return (
    <div>
    <Navbar/>
  <div class="container">
  <h4 className="text-center text-success mt-5"><b>Search Train According to Your Destination</b></h4>
    <div class="input-group mb-4 mt-3">
     <div class="form-outline">
        <input type="text" id="form1" onChange={(e)=>setRecord(e.target.value)} class="form-control" placeholder="search record" style={{backgroundColor:"#ececec"}}/>
   </div>
   <button type="button" onClick={searchRecords} class="btn btn-success">
       Search Movie
   </button>
  </div>                   
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Sr.No</th>
        <th>Train Name</th>
        <th>Source</th>
        <th>Destination</th>
        <th>Price</th>
        <th>Time Of Arrival</th>
        <th>Time Of Departure</th>
        <th>Total No Of Seats</th>
        <th>Train Class</th>
      </tr>
    </thead>
    <tbody>
      {search.map((name)=>
      <tr>
        <td>{i++}</td>  
        <td><h6>{name.MovieName}</h6></td>  
        <td><h6>{name.MovieName}</h6></td>  
        <td><h6>{name.MovieName}</h6></td>  
        <td><h6>{name.MovieName}</h6></td>  
        <td><h6>{name.MovieName}</h6></td>  
        <td><img class="img-fluid" src={"/images/" + name.MoviePath} style={{maxWidth:"10%"}}  alt=""/></td>  
      </tr>
      )}  
 
    </tbody>
  </table>
</div>
</div>
 
  );
}

 
export default Search;
*/