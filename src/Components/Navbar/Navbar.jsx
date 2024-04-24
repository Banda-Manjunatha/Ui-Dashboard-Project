import React from "react";
import "./Navbar.css";
import notification from "../../Assets/notify.png";
import avatar from "../../Assets/avatar.png";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div></div>
        <div className="w-[40%] flex items-center gap-2">
          <div className="search-bar-container">
            <div className="select">
              <select name="" id="">
                <option value="Patients">Patients</option>
              </select>
            </div>
            <div className="search">
              <input type="text" placeholder="Search here..." />
              <img
                src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1711990845/search_azzowy.png"
                alt="search_icon"
              />
            </div>
          </div>
          <div className="addBtn-container">
            <button>+ Add New</button>
          </div>
        </div>
        <div className="nav-image-container">
          <img src={notification} alt="notify_image" />
          <img src={avatar} alt="avatar_image" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
