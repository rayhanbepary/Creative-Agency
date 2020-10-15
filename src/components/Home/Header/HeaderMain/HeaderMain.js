import React from 'react';
import Frame from '../../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <main style={{marginRight:'0',marginTop: '20px'}} className="row d-flex align-items-center">
            <div className="col-lg-4 col-md-8 offset-lg-1 header-text">
                <h1>
                Let’s Grow Your <br/>
                Brand To The <br/>
                Next Level
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a minus nihil nesciunt veritatis? Dignissimos rem consequatur tempora magnam</p>
                <button className="btn-brand">Hire us</button>
            </div>
            <div className="col-lg-6 headerImg" style={{paddingRight: '0'}}>
                <img src={Frame} alt="Frame" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;