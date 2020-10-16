import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [admin,setAdmin] = useState({});

    const handleBlur = (e) => {
        const newAdmin = {...admin};
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }

    const handleSubmit =  (e) => {
        e.preventDefault();

        fetch('https://salty-crag-70995.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(admin)
        })
    }

    return (
        <div className="serviceListAdmin-container">
        <div className="containerStyle container-fluid">
            <div className="row">
                <div className="col-md-12 col-lg-2" style={{paddingLeft: '0'}}>
                    <Sidebar></Sidebar>
                </div>
            </div>

            <div className="row" style={{marginRight: '0',marginLeft: '0'}}>
                <div className="text-right col-md-12 col-lg-10 offset-lg-2 py-2 d-flex">
                    <div style={{width: "200px", marginRight: 'auto',marginLeft: '-20px'}}>
                        <span className="DashboardPageName">Service List</span>
                    </div>
                    <img src={loggedInUser.image} alt="" style={{height: "30px",marginRight: '10px',marginTop: '10px',borderRadius: '100px'}}/>
                    <span className="userName" style={{marginRight: '40px',marginTop: '10px'}}>{loggedInUser.name}</span>
                </div>
            </div>

            <div className="row" style={{marginRight: '0',marginLeft: '0'}}>
                <div className="col-md-12 col-lg-10 offset-lg-2" style={{background: '#F4FDFB',paddingBottom: '80px', paddingTop: '50px'}}>
                    <div className="col-md-6" style={{padding: '40px 30px',background: '#ffffff',borderRadius: '10px'}}>
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <input type="text" onBlur={handleBlur} className="form-control" placeholder="Name" name="name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" onBlur={handleBlur} className="form-control" placeholder="john@gmail.com" name="email"/>
                            </div>
                            <button type="submit"className="btn-brand">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    );
};

export default MakeAdmin;