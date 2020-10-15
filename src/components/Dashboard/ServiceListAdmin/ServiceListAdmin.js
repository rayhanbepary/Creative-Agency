import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { userContext } from '../../../App';

const ServiceListAdmin = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orderedService,setOrderedService] = useState([]);

    useEffect(() => {
        fetch('https://salty-crag-70995.herokuapp.com/getAllOrderedService')
        .then( res => res.json())
        .then( data => setOrderedService(data))
        .catch( err => console.log(err))
    },[])

    const handleChange = (e,id) => {
        const orderStatus = e.target.value;
        fetch(`https://salty-crag-70995.herokuapp.com/updateService/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({orderStatus})
        })
    }

    return (
        <div className="serviceListAdmin-container">
        <div className="containerStyle container-fluid">
            <div className="row">
                <div className="col-md-2" style={{paddingLeft: '0'}}>
                    <Sidebar></Sidebar>
                </div>
            </div>

            <div className="row" style={{marginRight: '0',marginLeft: '0'}}>
                <div className="text-right col-md-10 offset-md-2 py-2 d-flex">
                    <div style={{width: "200px", marginRight: 'auto',marginLeft: '-20px'}}>
                        <span style={{fontSize:'34px', fontWeight:'bold'}}>Service List</span>
                    </div>
                    <img src={loggedInUser.image} alt="" style={{height: "30px",marginRight: '10px',marginTop: '10px',borderRadius: '100px'}}/>
                    <span style={{marginRight: '40px',marginTop: '10px'}}>{loggedInUser.name}</span>
                </div>
            </div>

            <div className="row" style={{marginRight: '0',marginLeft: '0'}}>
                <div className="col-md-10 offset-md-2" style={{background: '#F4FDFB',paddingBottom: '80px', paddingTop: '50px'}}>
                    <div className="serviceTable">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Email</th>
                                    <th className="text-secondary" scope="col">Service</th>
                                    <th style={{width: '300px'}} className="text-secondary" scope="col">Project Details</th>
                                    <th className="text-secondary" scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                orderedService.map((service, index) => 
                                        
                                    <tr key={index}>
                                        <td>{service.name}</td>
                                        <td>{service.email}</td>
                                        <td>{service.service}</td>
                                        <td>{service.projectDetail}</td>
                                        <td>
                                            <div class="form-group">
                                                <select class="form-control" name="orderStatus" onChange={(e) => handleChange(e,service._id)}>
                                                    <option selected>{service.orderStatus}</option>
                                                    <option>Pending</option>
                                                    <option>On going</option>
                                                    <option>Done</option>

                                                </select>
                                            </div>
                                        </td>

                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    );
};

export default ServiceListAdmin;