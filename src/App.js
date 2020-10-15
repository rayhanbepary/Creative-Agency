import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import './Responsive.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Dashboard/Order/Order/Order';
import ServiceListClient from './components/Dashboard/ServiceListClient/ServiceListClient/ServiceListClient';
import Review from './components/Dashboard/Review/Review/Review';
import ServiceListAdmin from './components/Dashboard/ServiceListAdmin/ServiceListAdmin';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';


export const userContext = createContext();

function App() {

  const [servicesData,setServicesData] = useState([]);
  const [selectedService,setSelectedService] = useState([]);

  useEffect(() => {
    fetch('https://salty-crag-70995.herokuapp.com/services')
    .then( res => res.json())
    .then( data => setServicesData(data))
    .catch( err => console.log(err))
  },[])

  const handleService = (servicesItem) => {
      const clickedService = servicesData.find(item => item._id === servicesItem._id );
      setSelectedService(clickedService);
  }

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Switch>
        <Route exact path="/">
          <Home handleService={handleService} servicesData={servicesData}></Home>
        </Route>
        <PrivateRoute exact path="/service/order">
          <Order selectedService={selectedService}></Order>
        </PrivateRoute>
        <PrivateRoute exact path="/service/serviceList">
          <ServiceListClient></ServiceListClient>
        </PrivateRoute>
        <PrivateRoute exact path="/service/review">
          <Review></Review>
        </PrivateRoute>
        <PrivateRoute exact path="/admin/serviceList">
          <ServiceListAdmin></ServiceListAdmin>
        </PrivateRoute>
        <PrivateRoute exact path="/admin/addService">
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute exact path="/admin/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <Route exact path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </userContext.Provider>
  );
}

export default App;
