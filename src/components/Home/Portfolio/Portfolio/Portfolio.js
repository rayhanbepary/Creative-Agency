import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import carousel1 from '../../../../images/carousel-1.png';
import carousel2 from '../../../../images/carousel-2.png';
import carousel4 from '../../../../images/carousel-4.png';
import carousel5 from '../../../../images/carousel-5.png';


const Portfolio = () => {

    const [responsive,setResponsive] = useState({
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768:{
            items: 3
        },
        1000: {
            items: 3
        }
    });

    return (
        <div className="portfolio-container">
            <div className="container">
                <h2>Here are some of <span style={{color: '#7AB259'}}>our works</span></h2>
                <div className="row">
                    <OwlCarousel
                        className="owl-theme"
                        autoplay
                        dots
                        loop
                        margin={25}
                        responsive={responsive}
                    >
                        
                        <div class="item">
                            <img src={carousel1} alt="carousel1"/>
                        </div>
                        <div class="item">
                            <img src={carousel2} alt="carousel2"/>
                        </div>
                        <div class="item">
                            <img src={carousel5} alt="carousel5"/>
                        </div>
                        <div class="item">
                            <img src={carousel4} alt="carousel4"/>
                        </div>

                    </OwlCarousel>
                </div>
            </div>  
        </div>
    );
};

export default Portfolio;