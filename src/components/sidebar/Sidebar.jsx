import "./sidebar.css"
import {MdOutlineRssFeed, MdGroups3} from 'react-icons/md'
import {FaUserGraduate} from "react-icons/fa"
import {BsFillChatSquareDotsFill,BsFillBookmarkFill,BsQuestionCircle,BsFillBagFill,BsCalendar4Event} from 'react-icons/bs'
import CloseFriend from '../closeFriend/CloseFriend';
import {Users} from "../../dummyData";


export default function Sidebar() {
  return (
   <div className='sidebar'>
   <div className="sidebarWrapper">
       <ul className="sidebarList">
           <li className="sidebarListItem">
              <MdOutlineRssFeed className="sidebarIcon" />
              <span className='sidebarListItemText'>Feed</span>
           </li>
           <li className="sidebarListItem">
              <BsFillChatSquareDotsFill className="sidebarIcon" />
              <span className='sidebarListItemText'>Videos</span>
           </li>
           <li className="sidebarListItem">
              <MdGroups3 className="sidebarIcon" />
              <span className='sidebarListItemText'>Groups</span>
           </li>
           <li className="sidebarListItem">
              <BsFillBookmarkFill className="sidebarIcon" />
              <span className='sidebarListItemText'>Bookmarks</span>
           </li>
           <li className="sidebarListItem">
              <BsQuestionCircle className="sidebarIcon" />
              <span className='sidebarListItemText'>Questions</span>
           </li>
           <li className="sidebarListItem">
              <BsFillBagFill className="sidebarIcon" />
              <span className='sidebarListItemText'>Jobs</span>
           </li>
           <li className="sidebarListItem">
              <BsCalendar4Event className="sidebarIcon" />
              <span className='sidebarListItemText'>Events</span>
           </li>
           <li className="sidebarListItem">
              <FaUserGraduate className="sidebarIcon" />
              <span className='sidebarListItemText'>Courses</span>
           </li>
       </ul>
       <button className='sidebarButton'>Show More</button>
       <hr className='sidebarHr' />
         <ul className='sidebarFriendList'>
         {Users.map((u) =>
           <CloseFriend key={u.id} user={u}/>
          )}
         </ul>
   </div>
</div>

  )
}
