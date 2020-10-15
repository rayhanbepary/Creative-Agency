import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { userContext } from '../../../../App';
import Logo from "../../../../images/logos/logo.png";

const Navbar = () => {

    const loginStyles = {
        backgroundColor: '#111430',
        padding: '10px 40px',
        borderRadius: '5px'
    }

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [isAdmin,setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://salty-crag-70995.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            setIsAdmin(data);
        })
        .catch(err => console.log(err))
    },[])


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">

                    <nav className="navbar navbar-expand-lg navbar-light mt-3">
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} alt="logo" style={{width: '150px',height: '47px'}}/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Our Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Our Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Contact Us</Link>
                                </li>
                                {
                                   loggedInUser.email && <li className="nav-item">
                                        <Link className="nav-link" to={isAdmin ? "/admin/serviceList" : "/service/order"}>Dashboard</Link>
                                    </li>
                                }
                                <li className="nav-item">
                                    <Link className="nav-link loginLink" to="/login" style={loginStyles}>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    );
};

export default Navbar;