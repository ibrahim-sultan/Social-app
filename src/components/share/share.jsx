import React, { Component } from 'react';
import "./share.css"
import {GoFileMedia, GoLocation} from 'react-icons/go'
import {AiFillTags} from 'react-icons/ai'
import {BsFillEmojiSmileFill} from 'react-icons/bs'



class share extends Component {
    render() {
        return (
            <div className='share'>
             <div className="shareWrapper">
                <div className="shareTop">
                   <img className='shareImgProfile' src="./assests/person/1.jpeg" alt="" /> 
                   <input placeholder="what's on your mind Sultan?" className='shareInput' />
                </div>
                <hr  className='shareHr'/>
                <div className="shareButton">
                    <div className="shareOptions">
                        <div className="shareOption">
                        <GoFileMedia style={{color:"tomato"}} className='shareIcon' />
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                        <AiFillTags style={{color:"blue"}} className='shareIcon' />
                            <span className='shareOptionText'>Tags</span>
                        </div>
                        <div className="shareOption">
                        <GoLocation style={{color:"green"}} className='shareIcon' />
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                        <BsFillEmojiSmileFill style={{color:"goldenrod"}} className='shareIcon' />
                            <span className='shareOptionText'>Feeling</span>
                        </div>
                    </div>
                    <button className="shareButton1">Share</button>
                </div>
             </div>
            </div>
        );
    }
}

export default share;