import React, { Component } from "react";
import "./online.css";

class online extends Component { 
  render() {
    const {user} = this.props;
    return (
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img
              className="rightbarProfileImg"
              src={user.profilePicture}
              alt=""
            />
            <span className="rightbarOnline"> </span>
          </div>
          <span className="rightbarUsername">{user.username}</span>
        </li>
    );
  }
}

export default online;
