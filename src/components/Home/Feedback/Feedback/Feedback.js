import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Feedback = () => {

    const [feedbacks,setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('https://salty-crag-70995.herokuapp.com/reviews')
        .then( res => res.json())
        .then( feedbacks => setFeedbacks(feedbacks))
        .catch( err => console.log(err))
    },[])

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
        <section className="feedback">

            <h2>Clients <span style={{color: '#7AB259'}}>Feedback</span></h2>

            <div className="container">
                <OwlCarousel
                    className="owl-theme feedback-carousel"
                    responsive={responsive}
                    autoplay
                    loop
                    margin={24}
                >
                    {
                        feedbacks.map(clientFeedback =>
                            <div class="item feedback-item">
                                <div className="d-flex">
                                    <img src={clientFeedback.img} alt="feedbackImg" style={{height: '64px',width: '64px',borderRadius: '100px'}}/>
                                    <div className="ml-3" style={{marginTop: '9px'}}>
                                        <h6 style={{fontSize: '20px',fontWeight: '600'}}>{clientFeedback.review.name}</h6>
                                        <p style={{fontSize: '16px',fontWeight: '500',    marginTop: '-5px'}}>{clientFeedback.review.companyName}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>{clientFeedback.review.description}</p>
                                </div>
                            </div>
                        )   
                    }

                </OwlCarousel>
            </div>
        </section>
    );
};

export default Feedback;