import React from "react";
import Layout from "../components/layout";

import image1 from "../images/shikakuSimulator.png";
import image2 from "../images/shikakuSimulator1.png"

{/* <div id="slideShow">
              <div className="slideshowContainer">
                  <div className="slideShowInner">
                      <figure className="slides">
                          <img src={image1} alt="Shikaku Simulator" 
                                                              id="shikakuSimulatorImage" 
                                                              title="Screenshot of the Shikaku simulator after it solved a board"/>
                          <figcaption>Example of a board solved using Simulated Annealing.</figcaption>
                      </figure>
                      <figure className="slides">
                          <img src={image2} alt="Shikaku Simulator" 
                                                              id="shikakuSimulatorImage" 
                                                              title="Screenshot of the Shikaku simulator after it solved a board"/>
                          <figcaption>Same board as last one but with the Genetic Algorithm.</figcaption>
                      </figure>
                      <div className="slideShowControls">
                          <div>
                              <button className="previousSlideButton" data-ng-click="NextSlide(-1)">&#10094;</button>
                              <span className="slideshowDot" data-ng-click="CurrentSlide(1)"></span>
                              <span className="slideshowDot" data-ng-click="CurrentSlide(2)"></span>
                              <button className="nextSlideButton" data-ng-click="NextSlide(1)">&#10095;</button>
                          </div>
                      </div>
                  </div>
              </div>
            </div> */}

const PencilPuzzle = function() {
    return (
        <Layout>
            <h1 className="projectHeading">Pencil Puzzle Research Project</h1>
            <div id="projects-images">
              <figure>
                  <img src={image1} alt="Shikaku Simulator" 
                                                    id="shikakuSimulatorImage" 
                                                    title="Screenshot of the Shikaku simulator after it solved a board"/>
                <figcaption>Example of a board solved using Simulated Annealing.</figcaption>
              </figure>
              <figure>
                <img src={image2} alt="Shikaku Simulator" 
                                                    id="shikakuSimulatorImage" 
                                                    title="Screenshot of the Shikaku simulator after it solved a board"/>
                <figcaption>Same board as last one but with the Genetic Algorithm.</figcaption>
              </figure>
            </div>
        
            <div className="projectInfo">
                <div className="projectInfoCol1">
                    <h2>Overview</h2>
                    <p>
                      This was a group investigation project researching how well AI-based evolutionary computational algorithms performed against NP-Complete pencil puzzles.
                      For this projects the algorithms were: Genetic Algorithm, Simulated Annealing, Ant Colony Optimisation, Backtracking and Random Solver. 
                      The puzzles were Shikaku, Numberlink and Zen Puzzle Garden.
                    </p>
                    <p>
                      To begin we decided each member would do one puzzle. I did Shikaku. I began by looking at the rules of Shikau. 
                      The rules are that each shape can only contain a fixed amount of cells. So if a cell had the number 4 in it, it had to have four cells for the shape. 
                      Each shape could only be rectangular, could not overlap other shapes and all cells in the grid had to be part of a shape. Next, i looked if Shikaku was NP-Complete, 
                      this was challenging to find however other published papers had references that Shikaku was NP-Complete, although finding these papers could not be achieved. 
                      Next, each puzzle required a representation and a sequence of moves. The representation was how the puzzle would appear on the terminal window, this was fairly simple.
                      For Shikaku i decided to represent this puzzle by having each shape represented by a letter, with each cell that is part of the shape having the same letter.
                      The sequence of moves was how the selected algorithm would select which shape to do first and how the algorithm would complete the puzzle. For Shikaku i decided the shape would be grown out from the origin (the starting cell that contained a number which was the number of cells the shape had to contain) cell.
                    </p>
                    <p>
                        Once each puzzle was developed each puzzle was added to a platform called PPEC, PPEC was provided by our project supervisor which contained all the algorithms and other NP-Complete pencil puzzles. 
                        To get instances i web scrapped 100 boards of various difficulties from  <a className="webLink" href="https://www.janko.at/Raetsel/Sikaku/" target="_blank" rel="noopener no referrer">https://www.janko.at/Raetsel/Sikaku/</a>.
                    </p>
                    <p>
                        To get data we designed the tests which were to use the default settings on all the algorithms. Each algorithm was run 100 times with each instance having up to 1,000,000 evaluations (each evaluation is checking how valid the solution is). 
                        Data collected was the success rate, best-fit score, the time required to get the best solution, and finally, the time taken.
                    </p>
                    <p>
                        The data collected showed that Simulated Annealing performed best for Shikaku and Zen Puzzle Garden and Ant Colony Optimisation was best for Numberlink. Shikaku had some unexpected results.
                        Only Simulated Annealing performed with limited success on the easiest instances but its success began to drop off sharply after, with all other algorithms performing very poorly and had a very low, less than 10% success rate. With Ant Colony Optimisation completely failing on all tested Shikaku boards. 
                        This result suggested that Shikaku was a much more difficult puzzle compared to the other two puzzles or that the sequence of moves was unsuitable.         
                    </p>
                    <p>
                        To finish the project we wrote a research paper then did a presentation of our findings, our conclusions and how the project can be developed further.
                    </p>
                    <p>This investigation was part of a bigger investigation that included more puzzles that featured in PPEC, it is envisioned that the data collected from our project will be eventually used and compared to the other PPEC puzzles and a research paper will be published with all the data.
                    </p>
                </div>
                <div className="projectInfoCol2">
                    <p>Date: 2019 - 2020</p>
                    <p>Module mark: 74</p>
                    <p className="cardLanguage">C++</p>
                </div>
            </div>
        </Layout>
    );
};

export default PencilPuzzle;