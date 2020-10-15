import React from 'react';

import Slack from '../../../images/logos/slack.png';
import Google from '../../../images/logos/google.png';
import Uber from '../../../images/logos/uber.png';
import Netflix from '../../../images/logos/netflix.png';
import Airbnb from '../../../images/logos/airbnb.png';
 

const Clients = () => {
    return (
        <div className="container">
            <div className="row offset-md-1 offset-lg-1 clients">
                <div className="col-md-2 col-sm-4 clientImg">
                    <img src={Slack} alt="Slack"/>
                </div>
                <div className="col-md-2 col-sm-4 clientImg">
                    <img src={Google} alt="Google"/>
                </div>
                <div className="col-md-2 col-sm-4 clientImg">
                    <img src={Uber} alt="Uber"/>
                </div>
                <div className="col-md-2 col-sm-4 clientImg">
                    <img src={Netflix} alt="Netflix"/>
                </div>
                <div className="col-md-2 col-sm-4 clientImg">
                    <img src={Airbnb} alt="Airbnb"/>
                </div>
            </div>
        </div>
    );
};

export default Clients;