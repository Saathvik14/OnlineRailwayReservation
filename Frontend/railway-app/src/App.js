import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Register from './pages/Register';
import {  Route, Routes  } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import TrainList from './pages/TrainList';
import Dashboard from './pages/AdminDashboard';
import { useLocalState } from "./util/useLocalStorage"
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UserDashboard from './pages/UserDashboard';
import AddTrains from './pages/AddTrains';
import ManageTrains from './pages/ManageTrains';
import TrainListById from './pages/TrainListById';
import Updatetrain from './pages/Updatetrain';
import BookingForm from './pages/BookingForm';
import UserTrainList from './pages/UserTrainList';
import Search from './pages/Search';
import ViewBooking from './pages/ViewBooking';
import Footer from './components/Footer';

function App() {
  
  return (
   <div className='App'>
    

   
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<Login />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/addtrain' element={<AddTrains />} />
      <Route path='/managetrain' element={<ManageTrains />} />
      <Route path='/register' element={<Register />} />
      <Route path='/update' element={<Updatetrain />} />
      <Route path='/search' element={<Search />} />
      <Route path='/listalltrain' element={<TrainList />} />
      <Route path='/updatetrain/:trainId' element={<Updatetrain />} />
      <Route path='/trainlist' element={<TrainList />} />
      <Route path='/viewbooking' element={<ViewBooking />} />
      <Route path='/usertlist' element={<UserTrainList />} />
      <Route path='/bookingform' element={<BookingForm />} />     
      <Route path='/bookingform' element={<BookingForm />} />
      <Route path='/dashboard' element={
         <Dashboard /> } />

        <Route path='/userdash' element={
          <UserDashboard />
    } />
    </Routes >
    

    
    
   </div>
  );
}

export default App;
