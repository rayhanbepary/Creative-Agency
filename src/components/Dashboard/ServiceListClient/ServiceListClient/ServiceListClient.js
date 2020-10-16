import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import ServiceListCard from '../ServiceListCard/ServiceListCard';


const ServiceListClient = () => {

    const [servicesData,setServicesData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() => {
        fetch(`https://salty-crag-70995.herokuapp.com/getOrderedService?email=${loggedInUser.email}`)
        .then( res => res.json())
        .then( data => setServicesData(data))
        .catch( err => console.log(err))
    },[])


    return (
        <div className="serviceList-container">
        <div className="containerStyle container-fluid">
            <div className="row">
                <div className="col-md-12 col-lg-2" style={{paddingLeft: '0'}}>
                    <Sidebar></Sidebar>
                </div>
            </div>

            <div className="row" style={{marginRight: '0',marginLeft: '0'}}>
                <div className="text-right col-md-12 col-lg-10 offset-lg-2 py-2 d-flex">
                    <div className="serviceHeaderText">
                        <span className="DashboardPageName">Service List</span>
                    </div>
                    <img src={loggedInUser.image} alt="" style={{height: "30px",marginRight: '10px',marginTop: '10px',borderRadius: '100px'}}/>
                    <span className="userName" style={{marginRight: '40px',marginTop: '10px'}}>{loggedInUser.name}</span>
                </div>
            </div>

            <div className="row" style={{marginRight: '0',marginLeft: '0'}}>
                <div className="col-md-12 col-lg-10 offset-lg-2" style={{background: '#F4FDFB',paddingBottom: '80px', paddingTop: '50px'}}>
                    <div className="row">
                        {
                            servicesData.map( service => <ServiceListCard service={service}></ServiceListCard>)
                        }
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    );
};

export default ServiceListClient;