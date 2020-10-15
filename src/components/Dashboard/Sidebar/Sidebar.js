import React, { useContext, useEffect, useState } from 'react';
import { BiCart, BiMessageDots, BiUserPlus } from 'react-icons/bi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { AiOutlinePlus, AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';
import { userContext } from '../../../App';


const Sidebar = () => {


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
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-5" style={{height:"100vh"}}>
            <div>
                <img src={Logo} alt="" style={{width: '129px',marginBottom: '40px'}}/>

                <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="text-white" style={{textDecoration: "none"}}>
                            <AiOutlineHome/> <span>Home</span>
                        </Link>
                    </li>
                    
                    {
                        isAdmin ? <div>
                            <li>
                                <Link to="/admin/serviceList" className="text-white" style={{textDecoration: "none"}}>
                                    <HiOutlineClipboardList/> <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/addService" className="text-white" style={{textDecoration: "none"}}>
                                    <AiOutlinePlus/> <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/makeAdmin" className="text-white" style={{textDecoration: "none"}}>
                                    <BiUserPlus/> <span>Make Admin</span>
                                </Link>
                            </li>
                        </div> 
                        :
                        <div>
                            <li>
                                <Link to="/service/order" className="text-white" style={{textDecoration: "none"}}>
                                    <BiCart/> <span>Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/service/serviceList" className="text-white" style={{textDecoration: "none"}}>
                                    <HiOutlineClipboardList /> <span>Service List</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/service/review" className="text-white" style={{textDecoration: "none"}}>
                                    <BiMessageDots/> <span>Review</span>
                                </Link>
                            </li>
                        </div>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Sidebar;