import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";

const Home = ({ slideIn , isDay }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} isDay={isDay}/>
      <div className="home-container-2">
        <HomeMainbar isDay={isDay}/>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
