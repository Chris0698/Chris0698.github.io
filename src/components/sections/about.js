import React from "react";
import { Link } from "gatsby";
import me from "./../../images/me.jpg"
import styled, {css} from "styled-components"

const skills = [
    "Java, C++ and C# (.Net Framework and ADO.Net)",
    "PHP, JS, CSS and HTML",
    "JavaScript libraries including ReactJS and AngularJS (this portfolio was done in React and previous versions were Angular)",
    // "Mobile application development using Android Studio",
    "Databases including MySQL, SQLite and writing SQL",
];

const designPatterns = [
  "Factory",
  "MVC & MVP",
  "Decorator",
  "Dependency injection"
]

// const StyledText = styled.div `
//   ul.designPatterns {
//     display: grid;
//     grid-template-columns: repeat(2, minmax(140px, 200px));
//     padding: 0;
//     margin: 20px 0 0 0;
//     overflow: hidden;
//     list-style: none;
//     li {
//       position: relative;
//       margin-bottom: 10px;
//       padding-left: 20px;
//     }
//   }
// `;

const About = function (){
    return (
        <section id="about">
            <h2>About Me</h2>
            <div id="about-inner">
                <div>
                    <p>Hello, I am Chris. I am a new graduate from Northumbria University.</p>
                    <p>I studied Computer Science at Northumbria obtaining a First class MComP Degree with Honours. Many different modules were covered such as 
                       software development and designs with UML, games programming, web development and web applications, and embedded system programming with theories, so i am pretty flexible.</p>
                    <p>My best skills revolve around web development and general software engineering. Skills i have the best include:</p>
                    <ul id="skills">
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                    {/* <p>Programming patterns i have experience with include: </p>
                    <ul id="designPatterns">
                        {designPatterns && designPatterns.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul> */}
                    <p>I'm currently looking for a position. Feel free to contact me if you have something suitable or just to ask questions.</p>
                </div>
  
                <img src={me} alt="Me" id="aboutFigure"/>
            </div>
            <Link to="#contact" id="about-contact-button">Contact</Link>
        </section>
    );
};


export default About;