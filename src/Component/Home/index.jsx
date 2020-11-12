import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { set_data } from '../../store/action'
import User from './../../Images/User/user.png'

class Home extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="container chatbox shadow-lg">
        <div className="row h-100 border  border-primary rounded">
          <div className="col-md-4 pr-0">
            <div className="card h-100">
              <div className="card-header h-100">
                <div className="row">
                  <div className="col">
                    <img src={User} className="w-25 h-75 rounded-circle profile-image" alt="profile" />
                    <h4 className="name text-secondary">Current User</h4>
                  </div>
                </div>
                <br />
                <div className="col">
                  <h2 className="text-secondary">Friend List</h2>
                </div>

                <div className="col border border-primary"></div>
                <br />
                <div class="list-group">
                  <button type="button" class="list-group-item list-group-item-action">
                    <img src={User} className="rounded-circle profile-image" alt="profile" />
                    <p className="float-right">Friend name</p>
                  </button>
                  <button type="button" class="list-group-item list-group-item-action">
                    <img src={User} className="rounded-circle profile-image" alt="profile" />
                    <p className="float-right">Friend name</p>
                  </button>
                  <button type="button" class="list-group-item list-group-item-action">
                    <img src={User} className="rounded-circle profile-image" alt="profile" />
                    <p className="float-right">Friend name</p>
                  </button>
                  <button type="button" class="list-group-item list-group-item-action">
                    <img src={User} className="rounded-circle profile-image" alt="profile" />
                    <p className="float-right">Friend name</p>
                  </button>
                  <button type="button" class="list-group-item list-group-item-action">
                    <img src={User} className="rounded-circle profile-image" alt="profile" />
                    <p className="float-right">Friend name</p>
                  </button>

                </div>
              </div>
            </div>
          </div>
          
          <div className="col-8 pl-0">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-1 col-sm-1 col-md-1 col-lg-1">
                    <img src={User} className=" rounded-circle profile-image" alt="profile" />
                  </div>
                  <div className="col-11 col-sm-11 col-md-11 col-lg-11">
                    <h4 className="name text-secondary">Friend Name</h4>
                  </div>
                </div>
              </div>
              <div className="card-body ">
                {/* Left toast (Friend message) */}
                  <div className="w-50" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header">
                    <img src={User} className="rounded userMessage mr-2" alt="Friend" />
                    <strong className="mr-auto">Friend Name</strong>
                    <small>11 mins ago</small>
                  </div>
                  <div className="toast-body">
                    Hello, Friend message
                  </div>
                </div>  
          

               {/* Right toast (User message) */}
                 <div aria-live="polite"  aria-atomic="true" style={{ position: 'relative', minHeight: '100px' }}>
                  <div className="w-50" style={{ position: 'absolute', top: 0, right: 0 }}>
                    <div className="toast-header">
                      <img src={User} className="rounded userMessage mr-2" alt="User" />
                      <strong className="mr-auto">User Name</strong>
                      <small>11 mins ago</small>
                    </div>
                    <div className="toast-body">
                      Hello, User message
                    </div>
                  </div>
                </div> 
                {/* Left toast (Friend message) */}
                <div className="w-50" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header">
                    <img src={User} className="rounded userMessage mr-2" alt="Friend" />
                    <strong className="mr-auto">Friend Name</strong>
                    <small>11 mins ago</small>
                  </div>
                  <div className="toast-body">
                    Hello, Friend message
                  </div>
                </div>  
          

               {/* Right toast (User message) */}
                 <div aria-live="polite"  aria-atomic="true" style={{ position: 'relative', minHeight: '100px' }}>
                  <div className="w-50" style={{ position: 'absolute', top: 0, right: 0 }}>
                    <div className="toast-header">
                      <img src={User} className="rounded userMessage mr-2" alt="User" />
                      <strong className="mr-auto">User Name</strong>
                      <small>11 mins ago</small>
                    </div>
                    <div className="toast-body">
                      Hello, User message
                    </div>
                  </div>
                </div>
      {/* Left toast (Friend message) */}
      <div className="w-50" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header">
                    <img src={User} className="rounded userMessage mr-2" alt="Friend" />
                    <strong className="mr-auto">Friend Name</strong>
                    <small>11 mins ago</small>
                  </div>
                  <div className="toast-body">
                    Hello, Friend message
                  </div>
                </div>  
          

               {/* Right toast (User message) */}
                 <div aria-live="polite"  aria-atomic="true" style={{ position: 'relative', minHeight: '100px' }}>
                  <div className="w-50" style={{ position: 'absolute', top: 0, right: 0 }}>
                    <div className="toast-header">
                      <img src={User} className="rounded userMessage mr-2" alt="User" />
                      <strong className="mr-auto">User Name</strong>
                      <small>11 mins ago</small>
                    </div>
                    <div className="toast-body">
                      Hello, User message
                    </div>
                  </div>
                </div>

                 {/* Left toast (Friend message) */}
                 <div className="w-50" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header">
                    <img src={User} className="rounded userMessage mr-2" alt="Friend" />
                    <strong className="mr-auto">Friend Name</strong>
                    <small>11 mins ago</small>
                  </div>
                  <div className="toast-body">
                    Hello, Friend message
                  </div>
                </div>  
          

               {/* Right toast (User message) */}
                 <div aria-live="polite"  aria-atomic="true" style={{ position: 'relative', minHeight: '100px' }}>
                  <div className="w-50" style={{ position: 'absolute', top: 0, right: 0 }}>
                    <div className="toast-header">
                      <img src={User} className="rounded userMessage mr-2" alt="User" />
                      <strong className="mr-auto">User Name</strong>
                      <small>11 mins ago</small>
                    </div>
                    <div className="toast-body">
                      Hello, User message
                    </div>
                  </div>
                </div> 
               

              </div>

              <div class="card-footer">
                <div className="row">
                <input type="text" className="form-control form-rounded" placeholder="Enter Your Message" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
              </div>

            </div>
          </div>
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
    set_data: (data) => dispatch(set_data(data))

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)