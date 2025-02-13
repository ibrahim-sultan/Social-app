import React, { Component } from 'react';
import "./feed.css"
import Share from '../share/share';
import Post from '../post/Post';
import {Posts} from "../../dummyData";


class feed extends Component {
    render() {   
        return (
            <div className='feed'>
               <div className="feedWrapper">
                  <Share />
                  {Posts.map((p) =>(
                      <Post key={p.id} post={p}/>
                  ))} 
               </div>
            </div>
        );
    }
}

export default feed;