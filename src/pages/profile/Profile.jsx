import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className="profileCoverImg" src="assests/post/3.jpeg" alt="" /> 
                <img className="profileUserImg" src="assests/person/7.jpeg" alt="" /> 
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Safak Kocaoglu</h4>
                    <span className="profileInfoDesc">Hello my friend</span>
                </div>
            </div>
            <div className="profileRightBottom">
          <Feed />
          <Rightbar profile /> 
            </div>
        </div>
      </div>
    </>
  );
}
