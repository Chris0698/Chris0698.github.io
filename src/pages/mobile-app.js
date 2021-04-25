import React, { useState, useEffect, useRef } from 'react';
import Layout from "../components/layout";

import MobileApp0 from "../images/MobileApp.jpg"
import MobileApp1 from "../images/MobileApp1.jpg"
import MobileApp2 from "../images/MobileApp2.jpg"
import MobileApp3 from "../images/MobileApp3.jpg"
import MobileApp4 from "../images/MobileApp4.jpg"
import MobileApp5 from "../images/MobileApp5.jpg"
import MobileApp6 from "../images/MobileApp6.jpg"
import MobileApp7 from "../images/MobileApp7.jpg"

var visible = false;

const buttonClick = () => {
  console.log("Button clicked");
  var images = document.getElementById("more-mobile-app-photos");
  var button = document.getElementById("show-more-button");

  if(!visible) {
    visible = true;
    images.style.display = "flex";
    button.innerHTML = "Show Less";
  } else {
    visible = false;
    images.style.display = "none";
    button.innerHTML = "Show More";
  }
}

const MobileApp = function() {
  const [showMore, setShowMore] = useState(false);
  return (
    <Layout>
      <h1 className="projectHeading">Mobile App</h1>
      <div id="projects-images">
        <figure className="mobile-images">
          <img src={MobileApp0} alt="Mobile App" 
                                className="mobileAppImage" 
                                title="Users personal statistics from the app housed database."/>
          <figcaption>Users personal statisitcis, which are saved and retireved to a database.</figcaption>
        </figure>

        <figure>
          <img src={MobileApp1} alt="Mobile App" 
                                className="mobileAppImage" 
                                title="Users calories burnt per day graph."/>
          <figcaption>Graph of the users total calories per day.</figcaption>
        </figure>

        <div id="more-mobile-app-photos">
          <figure>
            <img src={MobileApp2} alt="Mobile App" 
                                  className="mobileAppImage" 
                                  title="The app side menu."/>
              <figcaption>Side menu.</figcaption>
          </figure>

          <figure>
            <img src={MobileApp3} alt="Mobile App" 
                                  className="mobileAppImage" 
                                  title="Found bluetooth devices."/>
            <figcaption>Found devices using Bluetooth LE.</figcaption>
          </figure>

          <figure>
            <img src={MobileApp4} alt="Mobile App" 
                                  className="mobileAppImage" 
                                  title="Error checking in the application."/>
            <figcaption>Error checking if an invalid number is entered as a goal.</figcaption>
          </figure>

          <figure className="slides slidesMobileApp">
            <img src={MobileApp5} alt="Mobile App" 
                                  className="mobileAppImage" 
                                  title="Food log calender."/>
            <figcaption>Food log calender. The user would select a date then the daily log would show.</figcaption>
          </figure>

          <figure>
            <img src={MobileApp6} alt="Mobile App" 
                                  className="mobileAppImage" 
                                  title="Daily food log."/>
            <figcaption>Users daily food log.</figcaption>
          </figure>

          <figure>
            <img src={MobileApp7} alt="Mobile App" 
                                  className="mobileAppImage" 
                                  title="A suggested healthy meal."/>
            <figcaption>A suggested "healthy" meal.</figcaption>
          </figure>
        </div> 
    
        <button className="show-more-button" onClick={buttonClick} id="show-more-button">
          Show More
        </button>
      </div>
      

      <div className="projectInfo">
        <div className="projectInfoCol1">
          <h2>Overview</h2>
          <p>
              This university assignment involved designing and creating an Android application using Android Studio that could run on an emulator or Andriod hardware. The app I chose to do was a fitness app.
          </p>
          <p>
              For the designs, i created wireframes for each screen where i wanted each UI element to be. Each screen was annotated with colours, 
              font size and estimated positions.
              A class diagram had all the class names, variables, methods and interfaces i wanted to use throughout the application. 
          </p>
          <p>
              The application was split into two components and each screen throughout used fragments, so each fragment could be swapped when changing screens. I chose this over the traditional method because i was using 
              features such as an app draw menu and a bottom navigation menu, and an option to change theme, the documentation required fragments to be used so this is why i chose this approach.
          </p>
          <p>
            The first component had screens such as a steps screen, calories burnt screen and hours slept screen. Each of these screens had a graph which showed the amount achieved against the days of the month and how many calories were burnt/ hours slept/ steps walked.
            The next screen was an option for the user to change their personal goals. Finally, the Device screen could find BlueTooth devices and connect to them, however, they could not communicate to them. The second component was about user nutrition. 
            The first screen was a personal food log where users could enter what food they ate and it would update with the number of calories eaten throughout the day. A second screen was a "suggested healthy meals" page, which would suggest healthy meals, however for the assignment, this data was faked.
          </p>
          </div>
          <div className="projectInfoCol2">
            <p>Date: 2020</p>
            <p>Module mark: 90</p>
            <p className="cardLanguage">Java</p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chris0698/KF7008Assignment" className="codeButton">View Code</a>
          </div>
        </div>
    </Layout>
  );
}

export default MobileApp;