import React from "react"
import Layout from "../components/layout";
import { Link } from "gatsby";

import img1 from "../images/WAI1.png"
import img2 from "../images/WAI2.png"
import img3 from "../images/WAI3.png"
import img4 from "../images/WAI4.png"
import img5 from "../images/WAI5.png"

var visible = false;

const buttonClick = () => {
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

const WAI = () => {
  return (
    <Layout>
      <h1 className="projectHeading">Web Application Intergration</h1>
      <div id="projects-images">
        <figure>
          <img src={img1} alt="Booking System" 
                          className="bookingSystemImage"
                          title="Picture of the booking system implementation"/>
          <figcaption>Opening UI after page load.</figcaption>
        </figure>
        <figure>
          <img src={img2} alt="Booking System" 
                          className="bookingSystemImage"
                          title="Side pane with film details"/>
          <figcaption>Side pane with full film details.</figcaption>
        </figure>
        <div id="more-mobile-app-photos">
          <figure>
            <img src={img3} alt="Booking System" 
                            className="bookingSystemImage"
                            title="ilms filtered by categories"/>
            <figcaption>Films filtered by categories.</figcaption>
          </figure>
          <figure>
            <img src={img4} alt="Booking System" 
                            className="bookingSystemImage"
                            title="Search results for the query 'fish'"/>
            <figcaption>Search results for the query "fish" in the search box.</figcaption>
          </figure>
          <figure>
            <img src={img5} alt="Booking System" 
                            className="bookingSystemImage"
                            title="Returned JSON containing all films with the category 'classic'"/>
            <figcaption>Returned JSON containing all films with the category "classic".</figcaption>
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
            This was a university assignment where i had to produce a SPA to display films in a database.
            Each film could be selected to show extra details about each film. The user could log into the app, 
            and if they were logged in, every time they selected a film, a note editor would be displayed, where a note could be added/edited, or deleted.
            The application used the MVC pattern to keep the code maintainable and clean. 
          </p>
          <p>
            HTML5 fragments were created to provide the UI elements such as the film details plane, note editor and were styled by using 
            CSS3. AngularJS was used to "stitch" the elements together and to make the website a single-page application. 
            To begin i created a route provider and a controller for functionality like film click, logging in, closing the note editor, etc. 
            A data service JS file was created as a middle man between the front-end controller and the PHP service pipe (explained next paragraph).
            The data service contained multiple functions which each used data promises and returned the promise to the controller which was the result of the PHP service pipe. 
            The controller then parsed the data and bind the results to the HTML fragments before they were displayed.
          </p>
          <p>
            Additionally, a search and filter by category was provided, this made calls to the database on category change, or every entered word
            without the need of refreshing the page.
          </p>
          <p>
            The application backend was written in Object-Oriented PHP. I had different classes such as a file writer (for error logging) an application registry class for user log-in data, a session class for session management,
            and a record set class for generating JSON or XML from a database query. 
            Additionally, i implemented a RESTful interface.
            A "service pipe" like PHP file made use of these classes which implemented the RESTful interface. This file had parameters passed to it by URL parameters, and inside the PHP service pipe file it had different SQL to 
            select and update data, depending on the arguments passed. These queries made use of the JSON recordset class and the result was JSON encoded and echoed out for the JS files. 
            Try-catch blocks were used for each query and the exception was error logged.
          </p>
          <p>
            For application security, the RESTful interface used prepared statements and sensitive data such as passwords was by method POST instead of GET.
          </p>
          <p>
            Finally, a testing page was provided to test each element such as log in and getting films to make sure everything was still working during development.
          </p>
        </div>
        <div className="projectInfoCol2">
          <p>Date: 2019</p>
          <p>Module mark: 80</p>
          <p className="cardLanguage">OO-PHP, AngularJS</p>
          <a target="_blank" rel="noopener no referrer" href="https://github.com/Chris0698/WebApp" className="codeButton">View Code</a>
        </div>
      </div>
      <Link to="/#projects" className="backToProjectsButton">Back To Projects</Link>
    </Layout>
  )
}

export default WAI