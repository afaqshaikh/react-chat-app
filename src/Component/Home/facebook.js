import React from 'react';
import './style.css';
import FacebookImage from './../../Images/facebook.png';
import { connect } from 'react-redux';
import { facebook_login } from '../../store/action'

class Facebook extends React.Component {
    render(){
        return(
            <div className="container mt-5 facebook">
                <div className="row text-center mt-5">
                    <img src={FacebookImage} alt="..." />

                </div>
                <div className="row text-center mt-5">
                    <button type="button" onClick={()=>this.props.facebook_login(this.props.history)} className="btn btn-primary btn-lg">Facebook Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      users: state.users,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      facebook_login: (history) => dispatch(facebook_login(history))
  
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Facebook);