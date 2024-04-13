import React, { Component } from 'react';
import "./topbar.css"
import { BsSearch, BsFillPersonFill, BsFillChatDotsFill } from 'react-icons/bs';
import {IoIosNotifications} from 'react-icons/io'
import { Link } from 'react-router-dom';



class Topbar extends Component {
    render() {
        return (
            <div className='topbarContainer'>
              <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className='logo'>SultanSocial</span>
                </Link>
                </div> 
              <div className="topbarCenter">
                   <div className="searchbar">
                   <BsSearch className='searchIcon' />
                      <input placeholder='Search for friends' className="searchInput" />
                   </div>
                </div> 
              <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                  <div className="topbarIconItem">
                  <BsFillPersonFill size='1.4rem'/>
                    <span className="topbarIconBadge">1</span>
                </div>    
                </div>
                <div className="topbarIcons">
                  <div className="topbarIconItem">
                    <BsFillChatDotsFill size='1.4rem' />
                    <span className="topbarIconBadge">1</span>
                </div>    
                </div>
                <div className="topbarIcons">
                  <div className="topbarIconItem">
                    <IoIosNotifications size='1.4rem'  />
                    <span className="topbarIconBadge">1</span>
                </div>    
                </div>
                <img src="/assests/person/1.jpeg" alt="" className='topbarImg' />
             </div> 
            </div>
        );
    }
}

export default Topbar;