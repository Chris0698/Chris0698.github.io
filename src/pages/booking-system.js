import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

import image1 from "../images/bookingSystem.png";
import image2 from "../images/bookingSystem1.png";

{/* <div id="slideShow">
<div className="slideshowContainer">
  <div className="slideShowInner">
    <figure className="slides">
      <img src={image1} alt="Booking System" 
                                      id="bookingSystemImage"
                                      title="Picture of the booking system implementation"/>
      <figcaption>Screenshot of the UI.</figcaption>
    </figure>
    <figure className="slides">
      <img src={image2} alt="Booking System" 
                                      id="bookingSystemImage"
                                      title="Picture of the booking system implementation"/>
      <figcaption>Screenshot of the UI showing multiple extras, the ability to change date and time is missing due to the event date was before current screenshot was taken.</figcaption>
    </figure>
    <div className="slideShowControls">
      <div>
        <button className="previousSlideButton">&#10094;</button>
        <span className="slideshowDot" data-ng-click="CurrentSlide(1)"></span>
        <span className="slideshowDot" data-ng-click="CurrentSlide(2)"></span> 
        <button className="nextSlideButton" data-ng-click="NextSlide(1)">&#10095;</button>
      </div>
    </div>
  </div>
</div>
</div> */}


const BookingSystem = function() {
  return (
    <Layout>
      <h1 className="projectHeading">Booking System</h1>
      <div id="projects-images">
        <figure>
          <img src={image1} alt="Booking System" 
                                          id="bookingSystemImage"
                                          title="Picture of the booking system implementation"/>
           <figcaption>Screenshot of the UI.</figcaption>
        </figure>
        <figure>
          <img src={image2} alt="Booking System" 
                                          id="bookingSystemImage"
                                          title="Picture of the booking system implementation"/>
            <figcaption>Screenshot of the UI showing multiple extras, the ability to change date and time is missing due to the event date was before current screenshot was taken.</figcaption>
        </figure>
      </div>
      {/* <button>Show More</button> */}

      <div className="projectInfo">
        <div className="projectInfoCol1">
          <h2>Overview</h2>
          <p>This was a group work university assignment. For this assignment a fictional company wanted a booking system where pre-ordered bookings
              for an activity can be confirmed or cancelled. Each booking can have anywhere for none to an unlimited amount of extra features added
              to the pre-booked activity. The application had to be done in C# and made use of the .Net framework and ADO.Net Entity Framework.
          </p>
          <p>To begin we had to design the system using SOLID design principles and UML. We made a class diagram to show all the class names, variables, methods and interfaces used. 
              Code quality such as coupling and cohesion was checked, and the assignment required to use object oriented design patterns. Patterns used
              for our implementation was: MVP (Model, View, Presenter), Object Factory and Decorator. The assignment additionally required the solution
              to be developed using a three-tier architecture approach: the presentational layer, the domain layer and data access layer. For the UI layer we used the MVP pattern to communicate with the domain layer.
              For the data access layer, an ORM was used, which was ADO.net Entity Framework, making use of LINQ queries to get data. Dependency injection was used throughout the implementation. 
              Finally, a test project had to be created which contained unit tests for all aspects of the system. 
          </p>
        </div>
        <div className="projectInfoCol2">
          <p>Date: 2019 - 2020</p>
          <p>Module Mark: 90</p>
          <p className="cardLanguage">C# with .Net Framework + ADO.Net</p>
          <a target="_blank" rel="noopener no referrer" href="https://github.com/Chris0698/BookingSystemAssignment" className="codeButton">View Code</a>
        </div>
      </div>
      <Link to="/#projects" className="backToProjectsButton">Back To Projects</Link>
    </Layout>
  );
}

export default BookingSystem;