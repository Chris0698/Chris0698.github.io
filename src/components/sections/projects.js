import { Link } from "gatsby";
import React from "react";
import {featuredProjects, projects} from "../../config";

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
        <div className="projectsOuter">
          {projects && projects.map(({title, description, year, tech, url}, i) =>
            (  
              <div className="projectCard">
                <div className="projectCardDetails">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <div className="cardExtraInfo">
                  <p>Year: {year}</p>
                  <p className="cardLanguage">{tech}</p>
                  <Link to={url} className="projectCardButton">More</Link>
                </div>
              </div>
            ))
          } 
        </div>
        <div id="more-projects">
          {/* <div className="projectCard">
            <div className="projectCardDetails">
              <h3>Asteroid Shooter Game</h3>
              <p>Asteroid shooter game improving the provided code base and creating a component based architecture.</p>
            </div>
            <div className="cardExtraInfo">
              <p>Year: 2018-2019</p>
              <p className="cardLanguage">C++ with DirectX9</p>
              <Link to="/asteroid-shooter" className="projectCardButton">More</Link> 
            </div>
          </div> */}
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
      {/* <button id="showMoreProjectsButton" onClick={buttonClick}>Show More</button> */}
    </section>
  );
};

export default Project;