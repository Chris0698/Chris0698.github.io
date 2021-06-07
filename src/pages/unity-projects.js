import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

import AsteroidVid from "../images/asteroidVidAnd.mp4";
import NightmaresVid from "../images/nightmaresVid.mp4";

const UnityProjects = function() {
    return (
        <Layout>
          <h1 className="projectHeading">Unity Projects</h1>
          <p className="projectOverview">In my spare time I have worked with the Unity Game Engine and done two small projects. Both projects extended the basic tutorials to include other features
              such as extra game features and interactivity. Source code for both projects can be found in a 
              <a className="webLink" href="https://github.com/Chris0698/UnitySourceCode" target="_blank" rel="noopener noreferrer"> GitHub repository</a>.
          </p>
          <p>
            Both games made use of a shared base, where common classes and features such as classes to handle each level, game UI code and utility code was kept. This was kept in the 
            "core" folder in the repository.
          </p>
          <video controls muted id="UnitySurivialShooter">
              <source src={AsteroidVid} type="video/mp4"/>
          </video>
          <div className="projectInfo">
              <div className="projectInfoCol1">
                  <p> My first project I extended a simple asteroid shooter game tutorial found
                      <Link href="https://learn.unity.com/project/space-shooter-tutorial" target="_blank" className="webLink" rel="noopener noreferrer"> here</Link>. For this game, I added an interactive game menu, another game mode 
                      where you had to exceed a goal to beat the level, and I also added special abilities to the player ship. The special ability was made with flexibility in mind and can be replaced with 
                      a different or new ability. Finally, I made the game playable on mobile devices by capturing finger input on the left hand side of the game to move left, and finger input on the right to move right. 
                  </p>
                  <p>
                    I hope to develop the game further by locking levels and requiring them to be unlocked by completing the previous one. I also hope to add a unlocked system where you can "buy" extra abilities 
                    or new type of ship, making use of the flexible ability system.  I also hope to experiement some more with shaders on the ship for abilites.
                  </p>
              </div>
              <div className="projectInfoCol2">
                  <p>Date</p>
                  <p>2018 - On Going</p>
              </div>
          </div>
          <video controls muted id="UnityAsteroidShooterVideo">
              <source src={NightmaresVid} type="video/mp4"/>
          </video>
          <div className="projectInfo">
              <div className="projectInfoCol1">
                <p>The second project I extended the survival shooter tutorial located 
                    <Link className="webLink" href="https://learn.unity.com/project/survival-shooter-tutorial" target="_blank" rel="noopener noreferrer"> here</Link>. This time i added "boss" like enemies and multiple levels of 
                    difficulties. The highest score for the played level is also saved in JSON form and is displayed for each level in the level select. Menus to select what level, adjust game settings was also added.
                </p>
              </div>
              <div className="projectInfoCol2">
                  <p>Date</p>
                  <p>2018-2019</p>
              </div>
            </div>
            <Link to="/#projects" className="backToProjectsButton">Back To Projects</Link>
        </Layout>
    );
}

export default UnityProjects;