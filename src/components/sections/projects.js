import { Link } from "gatsby";
import React from "react";

var visible = false;

const buttonClick = () => {
  var images = document.getElementById("more-projects");
  var button = document.getElementById("showMoreProjectsButton");

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


const Project = function() {
  return (
    <section id="projects">
        <h2>Projects</h2>
        <p>A collection of past projects done can be found here. Some of the projects also have a link to a GitHub repository to view the source code.</p>
        <div className="projectOuter">
          <div className="projectCard">
            <div className="projectCardDetails">
              <h3>Pencil Puzzle Research Project (Mcomp Project)</h3>
              <p>This was a research project. For this project, we looked at algorithms performance Vs pencil puzzles.</p>
            </div>
            <div className="cardExtraInfo">
              <p>Year: 2019-2020</p>
              <p className="cardLanguage">C++</p>
              <Link to="/pencil-puzzle" className="projectCardButton">More</Link>
            </div>            
          </div>

          <div className="projectCard">
            <div className="projectCardDetails">
              <h3>Mobile App</h3>
              <p>A mobile application designed and developed for Android using Android Studio.</p>
            </div>
            <div className="cardExtraInfo">
              <p>Year: 2020</p>
              <p className="cardLanguage">Java</p>
              <Link to="/mobile-app" className="projectCardButton">More</Link>    
            </div>
          </div>

          <div className="projectCard">
            <div className="projectCardDetails">
              <h3>Booking System</h3>
              <p>Group work booking system where the system had to be designed with the SOLID design principles and UML while making use of advanced techniques such as Entity Framework for a fictional company.</p>
            </div>
            <div className="cardExtraInfo">
              <p>Year: 2019</p>
              <p className="cardLanguage">C# with .Net Framework + ADO.Net</p>
              <Link to="/booking-system" className="projectCardButton">More</Link>  
            </div>
          </div>

          <div className="projectCard">
            <div className="projectCardDetails">
              <h3>Web App Intergration</h3>
              <p>A SPA Web application using front end and backend web techolgoies.</p>
            </div>
            <div className="cardExtraInfo">
              <p>Year: 2019</p>
              <p className="cardLanguage">OO-PHP, AngularJS</p>
              <Link to="/wai" className="projectCardButton">More</Link>
            </div>
          </div>

          <div className="projectCard">
            <div className="projectCardDetails">
              <h3>Undergraduate Computing Project</h3>
              <p>The Undergraduate dissertation project was an embedded systems project about creating a mapping robot using a SLAM algorithm.</p>
            </div>
            <div className="cardExtraInfo">
              <p>Year: 2018-2019</p>
              <p className="cardLanguage">C++ and Java</p>
              <Link to="undergraduate-computing-project" className="projectCardButton">More</Link>
            </div>
          </div>

          <div className="projectCard">
            <div className="projectCardDetails">
              <h3>Busy Backpack</h3>
              <p>Prototype website to replace Busy Backpack current site. Making sure the designs had a good UI and UX,
                  be optimised for search engines, and look well on mobile devices.
              </p>
            </div>
            <div className="cardExtraInfo">
              <p>Year: 2018-2019</p>
              <p className="cardLanguage">ReactJS, HTML5, CSS3, PHP7</p>
              <Link to="/busy-backpack" className="projectCardButton">More</Link>
            </div>
          </div>    
        </div>
        <div id="more-projects">
          <div className="projectCard">
            <div className="projectCardDetails">
              <h3>Asteroid Shooter Game</h3>
              <p>Asteroid shooter game improving the provided code base and creating a component based architecture.</p>
            </div>
            <div className="cardExtraInfo">
              <p>Year: 2018-2019</p>
              <p className="cardLanguage">C++ with DirectX9</p>
              <Link to="/asteroid-shooter" className="projectCardButton">More</Link> 
            </div>
          </div>
          {/* <div className="projectCard">
            <h3>Unity Projects</h3>
            <p>Some Unity projects.</p>
            <p>Year: 2017-2020</p>
            <div className="cardExtraInfo">
                <div>
                    <Link to="/unity-projects" className="projectCardButton">More</Link>
                </div>
                <p className="cardLanguage">Unity C#</p>
            </div>
          </div>     */}
        </div>
      <button id="showMoreProjectsButton" onClick={buttonClick}>Show More</button>
    </section>
  );
};

export default Project;