import React, { useContext } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import ReviewForm from '../ReviewForm/ReviewForm';
import { userContext } from '../../../../App';

const Review = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);


    return (
        <div className="order-container">
        <div className="containerStyle container-fluid">
            <div className="row">
                <div className="col-md-12 col-lg-2" style={{paddingLeft: '0'}}>
                    <Sidebar></Sidebar>
                </div>
            </div>

            <div className="row" style={{marginRight: '0',marginLeft: '0'}}>
                <div className="text-right col-md-12 col-lg-10 offset-lg-2 py-2 d-flex">
                    <div style={{width: "0px", marginRight: 'auto'}}>
                        <span className="DashboardPageName">Review</span>
                    </div>
                    <img src={loggedInUser.image} alt="" style={{height: "30px",marginRight: '10px',marginTop: '10px',borderRadius: '100px'}}/>
                    <span className="userName" style={{marginRight: '40px',marginTop: '10px'}}>{loggedInUser.name}</span>
                </div>
            </div>

            <div className="row" style={{marginRight: '0',marginLeft: '0'}}>
                <div className="col-md-12 col-lg-10 offset-lg-2" style={{background: '#F4FDFB',paddingBottom: '80px', paddingTop: '80px'}}>

                    
                    <ReviewForm></ReviewForm>

                </div>
            </div>
            
        </div>
    </div>
    );
};

export default Review;