
import BannerImage from "../assets/1.jpg";
import React from 'react'
import "../styles/Register.css";
import {Card, CardBody, CardHeader, Label, Col,Row,FormGroup,Container } from 'reactstrap';
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Message } from "@mui/icons-material";
import { useLocalState } from "../util/useLocalStorage";
import { Component } from "react";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";
import Form from "react-validation/build/form";
import { isEmail } from "validator";
import AuthService from "../services/AuthService";
import { createContext } from 'react';
import '../styles/SignUp.css'
import { Link } from "react-router-dom";


const required = value => {

  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};



const userName = value => {
  if (value.length < 4 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const password = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const phone = value => {
  if (value.length < 10) {
    return (
      <div className="alert alert-danger" role="alert">
        The phone number must be of 10 numbers
      </div>
    );
  }
};






export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
   

    this.state = {
      userName: "",     
      password: "",
      email: "",
      phone:"",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      userName: e.target.value
    });
  }


  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.signup(
        this.state.userName,
        this.state.password,
        this.state.email,
        this.state.phone,

      ).then(
        response => {
          this.setState({
            message: "Registration Successfull!",
            successful: true,
           
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
            
          });
        }
      );
    }
  }

  render() {
    return (
      <div >
      <Navbar />
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="image">
      <div className="col-md-12">
        <div className="signup_container">
          

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }} color="dark"
          >
            <h1>Sign Up</h1>
            {!this.state.successful && (
              <div>
                <div className="form-group  mt-2">
                  <label htmlFor="userName">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.onChangeUsername}
                    validations={[required, userName]}
                  />
                </div>

                

                <div className="form-group  mt-2">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, password]}
                  />
                </div>
                <div className="form-group  mt-2">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    
                   
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="phone">Mobile Number</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChangePhone}
                    validations={[required, phone]}
                  />
                </div>
               

                <div className="form-group mt-4">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <Button
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

