import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

import video from "../images/asteroidVid.mp4";

const AsteroidShooter = function() {
    return (
        <Layout>
          <h1 className="projectHeading">Asteroid Shooter</h1>
          <div id="slideShow">
              <div className="slideshowContainer">
                  <div className="slideShowInner">
                      <div className="slides">
                          <video controls id="asteroidShooterVideo">
                              <source src={video} type="video/mp4"/>
                          </video>
                      </div>
                  </div>
              </div>
          </div>

          <div className="projectInfo">
              <div className="projectInfoCol1">
                  <h2>Overview</h2>
                  <p>This was a university assignment. For this assignment, a basic "engine", developed using C++ and DirectX9, was provided. The assignment
                      was to develop the engine further and to improve the code cohesion while having minimal coupling
                      between the classes. Design documentation, a class diagram and multiple sequence diagrams, with a short essay 
                      of the limitation of the engine were required. Finally, a small game had to be created to make use of the engine however game playability was not assessed.
                      A simple game of shooting asteroids using a player-controlled ship was developed to satisfy this requirement. To improve the provided base engine different classes such as a player class,
                      asteroid class, a game object and a game object manager class, where originally all the logic code was placed inside one Update method. I also had to manage memory leaks that can occur due to pointers, to 
                      handle this I used smart pointers throughout.
                  </p>
                  <p>An advanced component of the game was required which was to have a component-based architecture for the game objects. Each game object: bullets,
                      player ship, explosions and asteroid had its components that handled player input, collision and health where appropriate. Each component such as ship collision 
                      overrides an abstract method from a Component super class so new components could be created and can be added to each object. A factory design pattern was additionally used for creating new game objects.  
                  </p>
                  <p>
                  This assignment helped with my debugging skills, using the Visual Studio debugging tools, to check for why a null pointer occurred or looking for why unexpected behavior occurred during development.
                  </p>
                  <p>Additionally, in my spare time, I am working on improving this further by using a sprite sheet, adding a HUD, and add more levels of various difficulty.

                  </p>
              </div>
              <div className="projectInfoCol2">
                  <p>Date: 2018 - 2019</p>
                  <p>Module Mark: 82</p>
                  <a target="_blank" rel="noopener no referrer" href="https://github.com/Chris0698/AsteroidGame" className="codeButton">View Code</a>
              </div>
            </div>
            <Link to="/#projects" className="projectCardButton">Back To Projects</Link>
        </Layout>
    );
}

export default AsteroidShooter;