import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { get_users } from '../../store/action'
import User from './../../Images/User/user.png'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      chat_user: {},
      chats: [],
      message: ""
    }
  }

  chats = (user) => {
    this.setState({
      chat_user: user
    })
  }

  uid_merge = (uid1,uid2)=>{
    if(uid1<uid2){
      return uid1+uid2
    }else{
      return uid2+uid1
    }
  }

  send_message = () => {
    // let user = this.props.current_user
    // let chat_user = this.state.chat_user
    // let merge_uid = this.uid_merge(user.uid,chat_user.uid)


    this.state.chats.push({
      message: this.state.message
    })
    this.setState({
      chats: this.state.chats,
      message: ""
    })
  }

  componentDidMount() {
    this.props.get_users()
  }

  render() {
    let user = this.props.current_user
    return (
      <div className="container chatbox shadow-lg">
        <div className="row h-100 border  border-primary rounded">
          <div className="col-md-4 pr-0">
            <div className="card h-100">
              <div className="card-header h-100">
                <div className="row">
                  <div className="col">
                    <img src={user.profile} className="w-25 h-75 rounded-circle profile-image" alt="profile" />
                    <h4 className="name text-secondary">{user.name}</h4>
                  </div>
                </div>
                <br />
                <div className="col">
                  <h2 className="text-secondary">Friend List</h2>
                </div>

                <div className="col border border-primary"></div>
                <br />
                <div class="list-group">
                  {/* v.uid !== user.uid && */}
                  {this.props.users.map((v, i) => {
                    return <button type="button" key={i} onClick={() => this.chats(v)} class="list-group-item list-group-item-action">
                      <img src={v.profile} className="rounded-circle profile-image" alt="profile" />
                      <p className="float-right">{v.name}</p>
                    </button>
                  })}
                  <button type="button" class="list-group-item list-group-item-action">
                    <img src={User} className="rounded-circle profile-image" alt="profile" />
                    <p className="float-right">Friend name</p>
                  </button>


                </div>
              </div>
            </div>
          </div>

          <div className="col-8 pl-0">

            {Object.keys(this.state.chat_user).length ?
              <div className="card">
                <div className="card-header">

                  <div className="row">
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1">
                      <img src={this.state.chat_user.profile} className=" rounded-circle profile-image" alt="profile" />
                    </div>
                    <div className="col-11 col-sm-11 col-md-11 col-lg-11">
                      <h4 className="name text-secondary">{this.state.chat_user.name} </h4>
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

                  {this.state.chats.map((v,i)=>{
                  return <div aria-live="polite"  key={i} aria-atomic="true" style={{ position: 'relative', minHeight: '100px' }}>
                  <div className="w-50" style={{ position: 'absolute', top: 0, right: 0 }}>
                    <div className="toast-header">
                      <img src={User} className="rounded userMessage mr-2" alt="User" />
                      <strong className="mr-auto">User Name</strong>
                      <small>11 mins ago</small>
                    </div>
                    <div className="toast-body">
                      {/* Hello, User message */}
                      {v.message}
                    </div>
                  </div>
                </div>
                  })}


                </div>


                <div class="card-footer">
                  <div className="row">
                    <div className="input-group mb-3">
                      <input type="text" value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} className="form-control" placeholder="Enter Your Message" aria-label="Username" aria-describedby="basic-addon1" />
                      <div class="input-group-append">
                        <button class="btn btn-primary" onClick={() => this.send_message()} type="button" id="button-addon2">Send</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


              :
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1">
                      <img src={User} className=" rounded-circle profile-image" alt="profile" />
                    </div>
                    <div className="col-11 col-sm-11 col-md-11 col-lg-11">
                      <h4 className="name text-secondary">No User</h4>
                    </div>
                  </div>
                </div>
              </div>
            }


          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    current_user: state.current_user,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_users: () => dispatch(get_users())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)