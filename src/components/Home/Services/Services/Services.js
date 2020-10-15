import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = ({servicesData,handleService}) => {

    return (
        <div className="container" style={{marginTop: '150px'}}>

            <h2 className="text-center" style={{color: '#2D2D2D',fontSize: '34px'}}>Provide awesome <span style={{color: '#7AB259'}}>services</span></h2>

            <div className="row">
                {
                    servicesData.map(service => <ServicesCard handleService={handleService} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;