import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };

  const toggleSlide = () => {
    // Call the provided handleSlideIn function to toggle the slideIn prop
    if (handleSlideIn) {
      handleSlideIn(!slideIn);
    }
  };

  return (
    <div
      className="left-sidebar"
      style={slideIn ? slideInStyle : slideOutStyle}
    >
      <nav className="side-nav">
        <button onClick={toggleSlide} className="nav-btn">
          <NavLink to="/" className="side-nav-links" activeClassName="active">
            <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button onClick={toggleSlide} className="nav-btn">
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeClassName="active"
            >
              <img src={Globe} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}> Questions </p>
            </NavLink>
          </button>
          <button onClick={toggleSlide} className="nav-btn">
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeClassName="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Tags</p>
            </NavLink>
          </button>
          <button onClick={toggleSlide} className="nav-btn">
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeClassName="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Users</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
