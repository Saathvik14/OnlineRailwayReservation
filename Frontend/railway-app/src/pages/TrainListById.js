/*
import React, {Component} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import TrainServices from "../services/TrainService";
import "../App.css";

class TrainSearchById extends Component{
    constructor(props){
        super(props)
        this.state={
            searches: [],
            searchValue:''
        }
        this.BookTicket=this.BookTicket.bind(this);
        this.searchTrain=this.searchTrain.bind(this);
        this.fetchTrains=this.fetchTrains.bind(this);
      
    }

    componentDidMount(){
        this.fetchTrains()
    }

    fetchTrains() {
        TrainServices.getSearches().then((res)=>{
            this.setState({searches: res.data});
        });
    }

    //BookTicket(data){
      //  this.props.history.push('/Book-Ticket', data);
   // }
   

    searchTrain(e) {
        const value = e.target.value
        const _value = value.toUpperCase()
        const filterData = this.state.searches.filter(item => {
            let res
            for (const key in item) {
                const convertInString = `${item[key]}`.toUpperCase()
                if (convertInString.includes(_value)) {
                    res = true
                }
            }
            return res
        })

        if (value != '') {
            this.setState({
                searchValue: value,
                searches: filterData
            })
        }
        else {
            this.setState({
                searchValue: value,
            })
            this.fetchFlights()
        }
    }

   

    render(){
        return(
            <div className="allflight">
                <h2 className="text-center">All Flights</h2>
                <br/><br/>
                <input onChange={this.searchFlight} value={this.state.searchValue}/>
                <div className="row">
                    <table className="table table-striped table-bordered"  style={{marginLeft:10}}>
                        <thead>
                            <tr style={{textAlign:"center"}}>
                                <th>Flight Id</th>
                                <th>Flight Number</th>
                                <th>Origin</th>
                                <th>Destination</th>
                                <th>Flight Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.searches.map(
                                    search=>
                                    <tr style={{textAlign:"center"}} key={search.id}>
                                        <td>{search.id}</td>
                                        <td>{search.flightNumber}</td>
                                        <td>{search.origin}</td>
                                        <td>{search.destination}</td>
                                        <td>{search.flightDate}</td>
                                        <td>
                                        <button  className="btn btn-info" style={{backgroundColor:"goldenrod"}} onClick={()=>this.BookTicket(search)}>Book </button>
                                        </td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>  
            </div>
        )
    }
}

export default AllFlightUser;

*/




































/*
import React, { useEffect, useState } from 'react';
import adminSecurity from "../services/adminSecurity"
import { useLocalState } from '../util/useLocalStorage';

const TrainListById = () => {
    const trainId = window.location.href.split("/admin/viewtrainbyno/")[1];
    const [jwt, setJwt] =useLocalState("", "jwt");
const [routes,setRoutes] = useState({
routeId:"",
stationName:"",
timeOfArrival:"",
timeOfDeparture:"",
totalDistance:"",   
});

const [trainClasses ,setTrainClasses] = useState({
    className:"",
    price:"",
    numOfSeats:"",
})



    const [train, setTrain] = useState({
        trainId: "",
        trainName: "",
        source: "",
        destination: "",
        route: [routes],
        pricePerKms: "",
        daysOfRunning: [],
        totalNumOfSeats: "",
        trainClass: [trainClasses],
    });

    function updateRoute(prop, value) {
        const newRoute = { ...train.route };
        newRoute[prop] = value;
        setRoutes(newRoute);
    }

    function updateTrainClass(prop, value) {
        const newTrainClass = { ...train.trainClass };
        newTrainClass[prop] = value;
        setTrainClasses(newTrainClass);
    }
    function updateTrain(prop, value) {
        const newTrain = { ...train.trainClass };
        newTrain[prop] = value;
        setTrain(newTrain);
    }

    function save() {
        adminSecurity(`/admin/update/${trainId}`, "PUT", jwt, train).then(
            (trainData) => {
                setTrain(trainData);
            }
        )
    }


    useEffect(() => {
        adminSecurity(`/admin/viewtrainbyno/${trainId}`, "GET", jwt).then(
            (trainData) => {
                setTrain(trainData);
            }
        );
    }, []);

    return (
        <div>
            <h2>
                Train Number :
                <input type="number"
                    id="trainId"
                    onChange={(e) => updateTrain("trainId", e.target.value)}
                    value={train.trainId}
                />


            </h2>
            {
                train ? (
                    <>
                        <h2>Train Name:
                            <input
                                type="text"
                                id="trainName"
                                onChange={(e) => updateTrain("trainName", e.target.value)}
                                value={train.trainName}
                            />
                        </h2>
                        <h2>Source:
                            <input
                                type="text"
                                id="source"
                                onChange={(e) => updateTrain("source", e.target.value)}
                                value={train.source}
                            />
                        </h2>
                        <h2>Destination:
                            <input
                                type="text"
                                id="destination"
                                onChange={(e) => updateTrain("source", e.target.value)}
                                value={train.destination}
                            />
                        </h2>

                        <h2>Route</h2>
                        {
                            train.route.map((item) => {
                                return (
                                    <ul>
                                        <div key={item.routeId}>
                                            <li>
                                                RouteId:
                                                <input type="number"
                                                    id="routeId"
                                                    onChange={updateRoute}
                                                    value={routes.routeId}
                                                />
                                            </li>
                                            <li>
                                                Station name:
                                                <input type="text"
                                                    id="stationName"
                                                    onChange={updateRoute}
                                                    value={item.stationName}
                                                />
                                            </li>
                                            <li>
                                                Time of arrival:
                                                <input type="text"
                                                    id="timeOfArrival"
                                                    onChange={updateRoute}
                                                    value={item.timeOfArrival}
                                                />
                                            </li>
                                            <li>
                                                Time of Departure:
                                                <input type="text"
                                                    id="timeOfDeparture"
                                                    onChange={updateRoute}
                                                    value={item.timeOfDeparture}
                                                />
                                            </li>
                                            <li>
                                                Total distance:
                                                <input type="number"
                                                    id="totalDistance"
                                                    onChange={updateRoute}
                                                    value={item.totalDistance}
                                                />
                                            </li>
                                            <br />
                                        </div>
                                    </ul>
                                );
                            }
                            )

                        }
                        <h2>
                            price per kms:
                            <input
                                type="text"
                                id="trainName"
                                onChange={(e) => updateTrain("pricePerKms", e.target.value)}
                                value={train.pricePerKms}
                            />
                        </h2>

                        <h2>
                            Days of Running:
                            <input
                                type="text"
                                id="daysOfRunning"
                                onChange={(e) => updateTrain("daysOfRunning", e.target.value)}
                                value={train.daysOfRunning}
                            />
                        </h2>
                        <h2>
                            total number of seats:
                            <input
                                type="number"
                                id="totalNumOfSeats"
                                onChange={(e) => updateTrain("totalNumOfSeats", e.target.value)}
                                value={train.totalNumOfSeats}
                            />
                        </h2>



                        <h2>Train class</h2>
                        {
                            train.route.map((item) => {
                                return (
                                    <ul>
                                        <div key={item.trainClass}>
                                            <li>
                                                class name:
                                                <input type="text"
                                                    id="className"
                                                    onChange={updateTrainClass}
                                                    value={trainClasses.className}
                                                />
                                            </li>
                                            <li>
                                                price:
                                                <input type="number"
                                                    id="price"
                                                    onChange={updateTrainClass}
                                                    value={item.price}
                                                />
                                            </li>
                                            <li>
                                                number of seats
                                                <input type="text"
                                                    id="noOfSeats"
                                                    onChange={updateTrainClass}
                                                    value={item.noOfSeats}
                                                />
                                            </li>


                                            <br />
                                        </div>
                                    </ul>

                                );
                            }
                            )

                        }

                    </>


                ) : (
                    <></>

                )
            }
        </div >
)};
    
export default TrainListById;
*/