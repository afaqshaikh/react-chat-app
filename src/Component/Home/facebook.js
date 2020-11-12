import React from 'react';
import './style.css';
import FacebookImage from './../../Images/facebook.png'

class Facebook extends React.Component {
    render(){
        return(
            <div className="container mt-5 facebook">
                <div className="row text-center mt-5">
                    <img src={FacebookImage} alt="..." />

                </div>
                <div className="row text-center mt-5">
                    <button type="button" className="btn btn-primary btn-lg">Log In</button>
                </div>
            </div>
        )
    }
}

export default Facebook;