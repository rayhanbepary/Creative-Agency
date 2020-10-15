import React from 'react';

const ServiceListCard = ({service}) => {
    return (
        <div className="col-md-4 service-list-card">
            <div className="text-right d-flex mb-2">
                <div style={{width: '0',marginRight: 'auto'}}>
                    <img style={{height: '60px'}} src={`data:image/jpeg;base64,${service.serviceIcon}`} alt=""/>
                </div>
                <span className="status">{service.orderStatus}</span>
            </div>
            <h5>{service.service}</h5>
            <p>{service.description}</p>
        </div>
    );
};

export default ServiceListCard;