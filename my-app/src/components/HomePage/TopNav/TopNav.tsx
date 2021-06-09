import React from "react";
import "./TopNav.css";
import BellIcon from "../../../assets/icons/bell.png";
import HouseIcon from "../../../assets/icons/house.png";
import CommentsIcon from "../../../assets/icons/comments.png";
import Logo from "../../../assets/images/logo.png";
import HouseIcon2 from "../../../assets/icons/house2.png";
import Search from "../../../assets/icons/search.png";
import ArrowDown from "../../../assets/icons/arrow-down.png";
import Publications from "../../../assets/icons/publications.png";
import People from "../../../assets/icons/people.png";
import Entities2 from "../../../assets/icons/entities2.png";
import Administration from "../../../assets/icons/administration.png";
import Settings from "../../../assets/icons/settings.png";
import Privacy from "../../../assets/icons/privacy.png";
import Logout from "../../../assets/icons/logout.png";
import UserPhoto from "../../../assets/images/user-image.png";
import Notes from "../../../assets/icons/notes.png";
import { Link } from "react-router-dom";

const TopNav = () => (
  <div className="TopNav">
    <Link to="/">
      <img className="Logo" src={Logo} alt="" />
    </Link>

    <div className="dropdown">
    <Link to="/"><button  className="dropbtn">
        <img className="HouseIcon2" src={HouseIcon2} alt="" /> Home
        <img className="Arrow-down" src={ArrowDown} alt="" />
      </button></Link>

      <div className="dropdown-content">
        <div id="myDropdown" className="dropdown-content1">
          <input
            className="SearchBar__menu"
            type="text"
            placeholder="Filter..." 
            id="DropdownInput"
          ></input>
          <p>Platform</p>
          <Link to="/">
            <div className="HoverColor">
              <img src={HouseIcon2} alt="" />
              <div className="MenuIcons">Home</div>
            </div>{" "}
          </Link>{" "}
          {/* props todo */}
          <Link to="/test">
            <div className="HoverColor">
              <img src={Publications} alt="" />
              <div className="MenuIcons">Publications</div>
            </div>{" "}
          </Link>
          <Link to="/test">
            <div className="HoverColor">
              <img src={People} alt="" />
              <div className="MenuIcons">People</div>
            </div>
          </Link>
          <Link to="/entities">
            <div className="HoverColor">
              <img src={Entities2} alt="" />
              <div className="MenuIcons">Entities</div>
            </div>{" "}
          </Link>
          <Link to="/test">
            <div className="HoverColor">
              <img src={Administration} alt="" />
              <div className="MenuIcons">Administration</div>
            </div>{" "}
          </Link>
          <p>Workspaces</p>
          <Link to="/workspaces">
            <div className="HoverColor">
              <img src={Notes} alt="" />
              <div className="MenuIcons">Client Contract</div>
            </div>
          </Link>
          <div className="HoverColor">
            <img src={Notes} alt="" />
            <div className="MenuIcons">Supplier contract</div>
          </div>
          <div className="HoverColor">
            <img src={Entities2} alt="" />
            <div className="MenuIcons">Corporate</div>
          </div>
          <div className="HoverColor">
            <img src={Publications} alt="" />
            <div className="MenuIcons">Group notes</div>
          </div>
          <div className="HoverColor">
            <img src={Notes} alt="" />
            <div className="MenuIcons">Client Contract</div>
          </div>
        </div>

        <div className="dropdown-content2">
          <p>Account</p>
          <div className="UserIcon2">
            
            <div>
              <img src={UserPhoto} alt="" />
            </div>
            <div className="ProfileContener">
              <div className="UserIcon2_name">Mateusz Drzyzga</div>
              <Link to="/profil">
                <div className="ProfileLink">See profile</div>
              </Link>
            </div>
          </div>
          <Link to="/test">
            <div>
              <img src={Privacy} alt="" />
              <div className="MenuIcons">Privacyt</div>
            </div>
          </Link>
          <Link to="/test">
            <div>
              <img src={Settings} alt="" />
              <div className="MenuIcons">Settings</div>
            </div>
          </Link>
        </div>

        <div className="Logout-content">
          <img src={Logout} alt="" />
          <div className="Logout__font">Logout</div>
        </div>
      </div>
    </div>

    <input className="SearchBar" type="text" placeholder="Search..."></input>
    <img className="Search" src={Search} alt="" />

    <div className="NavIcons">
      <img className="HouseIcon" src={HouseIcon} alt="" />
      <img className="CommentsIcon" src={CommentsIcon} alt="" />
      <img className="BellIcon" src={BellIcon} alt="" />
    </div>
  </div>



);

export default TopNav;
