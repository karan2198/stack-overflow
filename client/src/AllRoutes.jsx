import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from "./Pages/Tags/Tags";
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UserProfile/UserProfile";

const AllRoutes = ({ slideIn, handleSlideIn ,isDay}) => {
  console.log('isDay in AllRoutes:' , isDay)
  return (
    <Routes>
      <Route path="/" element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} isDay={isDay}/>} />
      <Route path="Auth" element={<Auth isDay={isDay}/>} />
      <Route path="AskQuestion" element={<AskQuestion isDay={isDay}/>} />
      <Route path="Questions" element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} isDay={isDay}/>} />
      <Route path="Questions/:id" element={<DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn} isDay={isDay}/>} />
      <Route path="Tags" element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} isDay={isDay}/>} />
      <Route path="Users" element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} isDay={isDay}/>} />
      <Route path="Users/:id" element={<UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} isDay={isDay}/>} />
    </Routes>
  );
};

export default AllRoutes;