import React from 'react';
import { Link } from 'react-router-dom';


const ServicesCard = ({service,handleService}) => {

    return (
       
            <div className="col-lg-4 col-md-6 col-sm-12 service-card text-center p-5">
                 <Link to="/service/order" style={{textDecoration: 'none'}}>
                <div className="service-img">
                    <img style={{cursor: 'pointer'}} onClick={() => handleService(service)} src={`data:image/jpeg;base64,${service.image.img}`} alt="icon1"/>
                </div>
                <h4 onClick={() => handleService(service)} className="my-3" style={{color: '#111430',cursor: 'pointer'}}>{service.title}</h4>
                <p onClick={() => handleService(service)} style={{color: 'rgba(0, 0, 0, 0.7)',cursor: 'pointer'}}>{service.description}</p>
                </Link>
            </div>
        
    );
};

export default ServicesCard;