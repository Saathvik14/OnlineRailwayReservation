import BannerImage from "../assets/1.jpg";
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import { useLocalState } from "../util/useLocalStorage";
import Navbar from "../components/Navbar";
import Backg from "../assets/bgg.jpg"
import { Title } from "@mui/icons-material";
import "../styles/Home.css"


const Login = () => {
    console.log("Hello!");
   
     
    const[userName, setUsername]= useState("");
    const[password, setPassword] =useState("");
    const navigate = useNavigate();
    const [jwt, setJwt] =useLocalState("", "jwt");
    
   

    function sendUserLoginReq(){

    
      
        const reqBody = {
            userName: userName,
            password: password,
        };
    
        fetch("/user/auth/signin", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(reqBody),
        })
        .then((response) => Promise.all([response.json(), response.headers]))
        
        .then(([body, headers]) => {
          setJwt( headers.get("authorization")) ;
            navigate("/userdash");
            console.log(`jwt is ${jwt}`);
            alert("User Login successfull");
        })

        .catch((message)=> {
          alert(message);
        }) ;
      }   
       
 

/*

Displaying of jwt token in ui
function Login() {
  const [jwt,setJwt] = useLocalState("","jwt");


useEffect(() => { 
  if(!jwt) {
   
        const reqBody = {
            userName : "Saath",
            password :"Saath12@",
        };
    
        fetch("/user/auth/signin", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(reqBody),
        })
        .then((response) => Promise.all([response.json(), response.headers]))
        .then(([body, headers]) => {
            setJwt( headers.get("authorization")) ;
            useNavigate("/userdash")
           console.log(`jwt is ${jwt}`);
        });    
       }  
}, []); 


useEffect(() => {
console.log(`jwt is : ${jwt}`);
},[jwt]);
*/


  return (

    <>
     <Navbar />
     <div  className="home" style={{ backgroundImage: `url(${Backg})` }}> 
     
     
      <Container >
      <h1 >Login To Website!</h1>
      
        <Row className="justify-content-center mt-5">
          <Col md="8" lg="6">
            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="fs-4">Username</Form.Label>
              <Form.Control
                type="Name"
                size="lg"
                placeholder="User Name"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md="8" lg="6">
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="fs-4">Password</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                placeholder="Type in your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md="8"
            lg="6"
            className="mt-2 d-flex flex-column gap-5 flex-md-row justify-content-md-between"
          >
            <Button
              id="submit"
              type="button"
              size="lg"
              onClick={() => sendUserLoginReq()}
            >
              Login
            </Button>
            <Button
              variant="secondary"
              type="button"
              size="lg"
              onClick={() => {
                navigate("/");
              }}
            >
              Exit
            </Button>
          </Col>
        </Row>
      </Container>
      </div>
    </>


  );
  

  /*
 return(
 <div>
   <Navbar/>
  <h1>yo
  </h1>
  <div>{jwt}</div>
 </div>
 )
 */
  
};
  

export default Login;
