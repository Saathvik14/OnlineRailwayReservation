import React from 'react'
import { useState, useEffect } from 'react';
import { useLocalState } from '../util/useLocalStorage';
import {useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Bgg from "../assets/6.jpg";

import {Card, Input, Label, Form, Button, Col,Row,FormGroup,Container } from 'react-bootstrap';
import Footer from '../components/Footer';



const Admin =() => {
 
    const[userName, setUsername]= useState("");
    const[password, setPassword] =useState("");
    const navigate = useNavigate();
    const [jwt, setJwt] =useLocalState("", "jwt");
    
   
    
    function sendAdminLoginReq() {
        const reqBody= {
            userName: userName,
            password: password,
        };
        fetch("/admin/auth/signin",{
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(reqBody),    
        })
        .then((response) => {
          if(response.status === 200)
          return  Promise.all([response.json(), response.headers]);
          else
          return Promise.reject(
            "Invalid Credentials"
          );
    })
        .then(([body, headers]) => {
          var header = headers.get("authorization");
          setJwt(header);
            navigate("/dashboard");
            alert("Admin Login successfull");
           
           
        })   
        .catch((message)=> {
          alert(message);
        }) ;
      
    }
   
  
return (
    <>
    <Navbar /> 
    <div  className="home" style={{ backgroundImage: `url(${Bgg})` }}> 
     
     <Container>
       <Row className="justify-content-center mt-5">
         <Col md="8" lg="6">
           <Form.Group className="mb-3" controlId="username">
             <Form.Label className="fs-1"  style={{ color: "#fff" }}>Admin Name</Form.Label>
             <Form.Control
               type="Name"
               size="lg"
               placeholder="Name"
               value={userName}
               onChange={(e) => setUsername(e.target.value)}
             />
           </Form.Group>
         </Col>
       </Row>

       <Row className="justify-content-center">
         <Col md="8" lg="6">
           <Form.Group className="mb-3" controlId="password">
             <Form.Label className="fs-1"  style={{ color: "#fff" }}>Password</Form.Label>
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
            variant="secondary"
             id="submit"
             type="button"
             size="lg"
             onClick={() => sendAdminLoginReq()}
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
 
};



export default Admin;