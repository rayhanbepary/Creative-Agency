import React, { useContext, useState } from 'react';
import { userContext } from '../../../../App';

const ReviewForm = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [review,setReview] = useState({});

    const handleBlur = (e) => {
        const newReview = {...review};
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://salty-crag-70995.herokuapp.com/clientsReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({review,img:loggedInUser.image})
        })

    }

    return (
        <div className="col-md-8 col-lg-6">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <input type="text" onBlur={handleBlur} className="form-control" placeholder="Your name" name="name"/>
                </div>
                <div className="form-group">
                    <input type="text" onBlur={handleBlur} className="form-control" placeholder="Company’s name, Designation" name="companyName"/>
                </div>
                <div className="form-group">
                    <textarea name="description" onBlur={handleBlur} cols="30" rows="5" className="form-control" placeholder="Description"></textarea>
                </div>
                <button type="submit"className="btn-brand">Submit</button>
            </form>
        </div>
    );
};

export default ReviewForm;