import React from 'react';
import Clients from '../../Clients/Clients';
import Contact from '../../Contact/Contact/Contact';
import Feedback from '../../Feedback/Feedback/Feedback';
import Header from '../../Header/Header/Header';
import Portfolio from '../../Portfolio/Portfolio/Portfolio';
import Services from '../../Services/Services/Services';

const Home = ({servicesData,handleService}) => {
    return (
        <div>
            <Header></Header>
            <Clients></Clients>
            <Services handleService={handleService} servicesData={servicesData}></Services>
            <Portfolio></Portfolio>
            <Feedback></Feedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;