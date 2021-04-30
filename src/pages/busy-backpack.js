import React from "react"
import Layout from "../components/layout";
import { Link } from "gatsby";

import image1 from "../images/BusyBack1.png"
import image2 from "../images/BusyBack2.png"
import image3 from "../images/BusyBack3.png"
import image4 from "../images/BusyBack6.png"
import image5 from "../images/BusyBack5.png"

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

const BusyBackpack = function() {
  return (
    <Layout>
      <h1 className="projectHeading">Busy Backpack</h1>
      <div id="projects-images">
        <figure>
          <img src={image1} alt="Booking System" 
                            id="busyBackpackImage"
                            title="Busy Backpack home page"/>
           <figcaption>Home page in English.</figcaption>
        </figure>
        <figure>
          <img src={image5} alt="Booking System" 
                            id="busyBackpackImage2"
                            title="All events page"/>
          <figcaption>Navigation menu for mobile devices. 
          </figcaption>
        </figure>
        <div id="more-mobile-app-photos">
          <figure>
            <img src={image2} alt="Booking System" 
                              id="busyBackpackImage"
                              title="Busy Backpack home page"/>
            <figcaption>Home page in Chinese.</figcaption>
          </figure>
          <figure>
            <img src={image3} alt="Booking System" 
                              id="busyBackpackImage"
                              title="Contact page with login open"/>
            <figcaption>Bootleg log in for the user on the Contact page, due to the database being lost, it has no functionality. </figcaption>
          </figure>
          <figure>
            <img src={image4} alt="Booking System" 
                              id="busyBackpackImage"
                              title="All events page"/>
            <figcaption>Events page, this was a calender where event "cards" would sit for each day. A user would click on a card to go to a detail
              event page. 
            </figcaption>
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
            During University i did some development internships for Busy Backpack, producing some website prototypes using technologies such as React, NPM, HTML5, and OO-PHP.
          </p>
          <p>
            Their current website was very basic and was produced by a website builder. It was missing features that my client wanted, which the builder could not produce.
            These features were: a user membership management area, multilingual support, and had nowhere where Busy Backpack members could share their creative ideas with the rest of the community. 
            This was why the role was created. I worked with the Busy backpack team to design and develop a prototype for replacing their current website with the desired missing features added. 
            Making use of web technologies such as PHP7, JavaScript  and CSS3. Additionally, making sure that the website had good accessibility and optimised for search engines. 
          </p>
          <p>
            To keep things simple, I followed the design set by the current website. The team also mentioned some design changes that they wanted, which I tried to incorporate as well. 
            The front end was produced using HTML5 and used JavaScript for added functionality such as form validation and the mobile navigation menu. 
            CSS3 was used for styling and to add responsiveness to when the screen size changed, for example hiding the nav links to show the mobile menu button.
          </p>
          <p>
            Language switching was handled server-side using Object Orientated PHP.
            I had classes for each page that provided the common elements and a class for handling client language. The language class loaded a .ini file, which was an argument passed from the PHP pages that created the web page object. 
            This loaded .ini file was then parsed and each sentence for the page to be displayed was set. A switch was provided at the top of the page to switch language, every time this was clicked, the page would reload and switch languages. 
          </p>
          {/* Everything from here was judged unclear */}
          <p>
            User log in was provided by a bootleg log in form. The user could log into the website using their account details and if they were signed in, 
            they could select what events that they were interested in. They could also get a list of what events that the said they were interested in, in their own “hub”. For security reasons,
            only the hashed password was stored in the database. PHP statements for log in made use of prepared statements for security. 
          </p>
          <p>
            Finally, a rough CMS was added, where the admin could create and edit events for the calender. 
          </p>
          <p>
            The database was designed and normalised to the third normal form. This made use of MySQL and had tables such as events, users, and  Busy Backpack partners. 
          </p>
          <p>
            Unfortunately, the project was never picked up. While the clients was very excited with my progress, 
            internal difficulties meant this project was not given the go ahead.
          </p>
          <p>
            For personal development, i also redeveloped the website but used React to build the frontend.
            This worked much better since it did not rely on PHP nor did it require the website to be reloaded each time the language was changed. Instead, a JSON file contained the key-value pairs and the i8N module was imported in NPM to load the JSON. 
            There was no database for this prototype during the time it was developed.
          </p>
        </div>
        <div className="projectInfoCol2">
          <p>Date: 2018 - 2019</p>
          <p className="cardLanguage">ReactJS, HTML5, CSS3, PHP7</p>
        </div>
      </div>
      <Link to="/#projects" className="projectCardButton">Back To Projects</Link>
    </Layout>
  );
}

export default BusyBackpack;