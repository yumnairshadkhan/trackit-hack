import React from "react";
import heroImage from "../assets/hero.jpg";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';


function HomePage() {
  return (
    <div className="md:flex bg-[#eeeeee] items-center justify-center h-screen">
      <div className="text-center p-7">
        <div className="text-[10px] md:text-[1rem]">
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "Welcome to TaskFlow Dashboard", 
              1000,
              "Organize Tasks Seamlessly",
              1000,
              "Collaborate and Assign Work Easily",
              1000,
              "Track Progress Across Boards",
              500,
            ]}
            speed={40}
            style={{ fontSize: "4em", fontWeight: "bold" }}
            repeat={Infinity}
          />
        </div>
        <p className="mb-4 text-[#262626]">
        Manage all your important tasks in one place. Create, edit, and assign jobs effortlessly while keeping track of progress. Stay organized and boost your productivity every single day.
        </p>
        <button className="bg-[#3b82f6] p-4 focus:outline-none hover:bg-blue-600 rounded text-white font-medium">
          <Link to="/signup">Get Started</Link>
        </button>
      </div>
      <div className="w-[80%]">
        <img src={heroImage} alt="hero"/>
      </div>
    </div>
  );
}

export default HomePage;