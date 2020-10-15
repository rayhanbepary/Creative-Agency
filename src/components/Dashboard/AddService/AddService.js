import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const AddService = () => {

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
        formData.append('title', info.title);
        formData.append('description', info.description);
        formData.append('status', info.status);

        fetch('https://salty-crag-70995.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })

    }

    return (
        <div className="serviceListAdmin-container">
        <div className="containerStyle container-fluid">
            <div className="row">
                <div className="col-md-2" style={{paddingLeft: '0'}}>
                    <Sidebar></Sidebar>
                </div>
            </div>

            <div className="row" style={{marginRight: '0',marginLeft: '0'}}>
                <div className="text-right col-md-10 offset-md-2 py-2 d-flex">
                    <div style={{width: "300px", marginRight: 'auto',marginLeft: '-100px'}}>
                        <span style={{fontSize:'34px', fontWeight:'bold'}}>Add Services</span>
                    </div>
                    <img src={loggedInUser.image} alt="" style={{height: "30px",marginRight: '10px',marginTop: '10px',borderRadius: '100px'}}/>
                    <span style={{marginRight: '40px',marginTop: '10px'}}>{loggedInUser.name}</span>
                </div>
            </div>

            <div className="row" style={{marginRight: '0',marginLeft: '0'}}>
                <div className="col-md-10 offset-md-2" style={{background: '#F4FDFB',paddingBottom: '80px', paddingTop: '50px'}}>

                    <div className="col-md-8" style={{background: '#ffffff',padding: '40px 30px',borderRadius: '10px'}}>
                        <form onSubmit={handleSubmit}>
                            <div class="form-group d-flex">
                                <div className="col-md-6" style={{padding: '0'}}>
                                    <input type="text" onBlur={handleBlur} name="title" id="title" className="form-control" placeholder="Enter title"/>
                                </div>
                                
                                <div className="col-md-3"style={{paddingLeft: '20px'}}>
                                    <input type="file" onChange={handleFileChange} id="icon" className="form-control-file"/>
                                </div>
                            </div>
                            <div className="form-group d-flex">

                                <div className="col-md-9"style={{padding: '0'}}>
                                    <textarea name="description" onBlur={handleBlur} id="description" cols="30" rows="5" className="form-control" placeholder="Enter Description"></textarea>
                                </div>

                                <div className="col-md-3"style={{paddingLeft: '20px'}}>
                                    <select class="form-control" onBlur={handleBlur} name="status">
                                        <option selected>Done</option>
                                        <option>On going</option>
                                        <option>Pending</option>
                                    </select>
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

export default AddService;