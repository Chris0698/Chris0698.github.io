import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

import image1 from "../images/Thunderball.png";
//import image2 from "../images/Lotto.png";

const Lottery = function() {
  return (
    <Layout>
      <h1 className="projectHeading">Lottery Simmulator</h1>
      <div id="projects-images">
        <figure>
          <img src={image1} alt="Booking System" 
                            id="busyBackpackImage"
                            title="Busy Backpack home page"/>
           <figcaption>Image of how Thundberball is played and stats.</figcaption>
        </figure>
      </div>
      <div className="projectInfo">
        <div className="projectInfoCol1">
          <h2>Overview</h2>
          <p>
            This was a personal project to see well i could do playing the Thunderball or Lottery games, without burning through my own money.
            For extra practise i decided to save the balls drawn and what balls i selected (or got a lucky dip) to a local SQL Server database 
            using Entity Framework using a code-first approach, which is the opposite of how the booking system database was implemented.
          </p>
          <p>
            For each game, the user could select if they wanted to play, search or get full stats from previous draws. 
            If the user plays then they can select how many lines they wanted, with 1 line being 1 game. And if they wanted a lucky dip. 
            Then the draw is made and the results are compared and prize money is presented. If stats were selected, the data for the game was presented, this included
            getting the data from the database then presenting it. Presented data included total won, average winnings, total "spent" and highest winnings.
          </p>
          <p>
            I decided to do this project because i wanted to create a .Net core project, having done a .Net Framework project before. I also wanted 
            to do another project involving Entity Framework but in the code first, approach as this was something i had no experience with before.
          </p>
          <h3>Techincal stuff</h3>
          <p>
            To handle generating the random number generation for lucky dips and draws, i populated a Dictionary with a number, bool pair. 
            The numbers are numbers that are valid for the game, so for lottery 1 - 59, Thunderball 1 - 39. The bool value was for if the number been selected.
            Elements from the dictionary were randomly selected, the amount selected dependant on the number of main balls selected (5 for Thunderball and 6 for Lotto).  
            These elements are checked that if the boolean has been selected is false, if it true then another element in the dictionary is selected, and the process repeats.
            The number in the element is added to an array and the array is then organised smallest to largest. Finally, the bonus balls are added in the same manner as before.  
          </p>
          <p>
            The database was a local SQL Server database that part of Visual Studio. This was a code-first approach. To keep things simple, i had 1 table called draws that stored an ID,
            the numbers drawn, the total cost, prize money won and the numbers selected for the draw. This made use of the draw class that contained the properties for each of these 
            elements. This approach meant i avoided needing to write SQL to select and insert data.
          </p>
        </div>
        <div className="projectInfoCol2">
          <p>Date: 2021</p>
          <p className="cardLanguage">C# with .Net Core + ADO.Net</p>
          <a target="_blank" rel="noopener no referrer" href="https://github.com/Chris0698/Lottery" className="codeButton">View Code</a>
        </div>
      </div>
      <Link to="/#projects" className="backToProjectsButton">Back To Projects</Link>
    </Layout>
  );
}

export default Lottery;