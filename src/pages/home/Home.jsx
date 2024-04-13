import React, { Component } from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"

class Home extends Component {
    render() {
        return (
            <>
              <Topbar />
              <div className="homeContainer">
              <Sidebar />
              <Feed />
              <Rightbar />
              </div>
            </>
            
        );
    }
}

export default Home;