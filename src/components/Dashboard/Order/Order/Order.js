import React, { useContext, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { userContext } from '../../../../App';

const Order = ({selectedService}) => {


    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('service', info.service);
        formData.append('projectDetail', info.projectDetail);
        formData.append('price', info.price);
        formData.append('orderStatus', selectedService.status);
        formData.append('description', selectedService.description);
        formData.append('serviceIcon', selectedService.image.img);

        fetch('https://salty-crag-70995.herokuapp.com/orderedService', {
            method: 'POST',
            body: formData
        })

    }

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
                        <span className="DashboardPageName">Order</span>
                    </div>
                    <img src={loggedInUser.image} alt="" style={{height: "30px",marginRight: '10px',marginTop: '10px',borderRadius: '100px'}}/>
                    <span className="userName" style={{marginRight: '40px',marginTop: '10px'}}>{loggedInUser.name}</span>
                </div>
            </div>

            <div className="row" style={{marginRight: '0',marginLeft: '0'}}>
                <div className="col-md-12 col-lg-10 offset-lg-2" style={{background: '#F4FDFB',paddingBottom: '80px', paddingTop: '80px'}}>

                    <div className="col-md-12 col-lg-6">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <input type="text" onBlur={handleBlur} className="form-control" placeholder="Your name / company’s name" name="name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" onBlur={handleBlur} className="form-control" placeholder="Your email address" name="email"/>
                            </div>
                            <div className="form-group">
                                <input type="text" onBlur={handleBlur} className="form-control" placeholder="Service Name" value={selectedService.title} name="service"/>
                            </div>
                            <div className="form-group">
                                <textarea name="projectDetail" onBlur={handleBlur} cols="30" rows="7" className="form-control" placeholder="Project Details"></textarea>
                            </div>
                            <div class="form-group d-flex">
                                <div className="col-md-6" style={{padding: '0'}}>
                                    <input type="text" onBlur={handleBlur} name="price" className="form-control" placeholder="Price"/>
                                </div>
                                
                                <div className="col-md-6"style={{paddingLeft: '20px'}}>
                                    <input type="file" onChange={handleFileChange} className="form-control-file"/>
                                </div>
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

export default Order;