(self.webpackChunkchris_aston_web_portfolio=self.webpackChunkchris_aston_web_portfolio||[]).push([[272],{1462:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(5444),r=a(7294),o=a(2502),l=a.p+"static/Thunderball-f30cee3c93ee79973f4175e911744714.png",s=a.p+"static/Lotto-8eefc9b26024317da617e04bf8fae255.png",i=a.p+"static/ThunderballStats-f3624e368410f51e7d940b7fb6f49aa2.png",c=a.p+"static/LottoStats-6e0fc74afa9cee57951be81ea10e354e.png",d=function(){return r.createElement(o.Z,null,r.createElement("h1",{className:"projectHeading"},"Lottery Simmulator"),r.createElement("div",{id:"projects-images"},r.createElement("figure",null,r.createElement("img",{src:l,alt:"Booking System",id:"busyBackpackImage",title:"Busy Backpack home page"}),r.createElement("figcaption",null,"Thundberball game.")),r.createElement("figure",null,r.createElement("img",{src:s,alt:"Booking System",id:"busyBackpackImage",title:"Busy Backpack home page"}),r.createElement("figcaption",null,"Lotto game.")),r.createElement("figure",null,r.createElement("img",{src:i,alt:"Booking System",id:"busyBackpackImage",title:"Busy Backpack home page"}),r.createElement("figcaption",null,"Thunderball stats.")),r.createElement("figure",null,r.createElement("img",{src:c,alt:"Booking System",id:"busyBackpackImage",title:"Busy Backpack home page"}),r.createElement("figcaption",null,"Lotto stats."))),r.createElement("div",{className:"projectInfo"},r.createElement("div",{className:"projectInfoCol1"},r.createElement("h2",null,"Overview"),r.createElement("p",null,"This was a personal project to see well i could do playing the Thunderball or Lottery games, without burning through my own money. For extra practise i decided to save the balls drawn and what balls i selected (or got from a lucky dip) to a local SQL Server database using Entity Framework using a code-first approach, which is the opposite of how the booking system database was implemented."),r.createElement("p",null,'For each game, the user could select if they wanted to play, search or get full stats from previous draws. If the user plays then they can select how many lines they wanted, with 1 line being 1 game. The user could select their numbers for the game, if they wanted a lucky dip. The draw is then made and the results are compared and prize money is presented. If stats were selected, the data for the game was presented, this included getting the data from the database then presenting it. Presented data included total won, average winnings, total "spent" and highest winnings.'),r.createElement("p",null,"I decided to do this project because i wanted to create a .Net core project, having done a .Net Framework project before. I also wanted to do another project involving Entity Framework but in the code first, approach as this was something i had no experience with before."),r.createElement("h3",null,"Techincal stuff"),r.createElement("p",null,"To handle generating the random number generation for lucky dips and draws, i populated a Dictionary with a number, bool pair. The numbers are numbers that are valid for the game, so for lottery 1 - 59, Thunderball 1 - 39. The bool value was for if the number been selected. Elements from the dictionary were randomly selected, wuth the amount selected dependant on the number of main balls selected for the game (5 for Thunderball and 6 for Lotto). These elements are checked that if the boolean has been selected is false, if it true then another element in the dictionary is selected, and the process repeats. The number in the element is added to an array and the array is then organised smallest to largest. Finally, the bonus balls are drawn. For thunderball the bonus ball is one random number selected between 1 - 14, for Lotto i got the bonus ball in the same manner was the regular balls are generated."),r.createElement("p",null,"The database was a local SQL Server database that part of Visual Studio. This was a code-first approach. For V1 of the application, to keep things simple, i had 1 table called draws that stored an ID, the numbers drawn, the total cost, prize money won and the numbers selected for the draw. This made use of the draw class that contained the properties for each of these elements. For version 2 i will have two separate tables and have a Thunderball draw class and a Lotto draw class extend off of Draw. This approach meant i avoided needing to write SQL to select and insert data.")),r.createElement("div",{className:"projectInfoCol2"},r.createElement("p",null,"Date: 2021"),r.createElement("p",{className:"cardLanguage"},"C# with .Net Core + ADO.Net"),r.createElement("a",{target:"_blank",rel:"noopener no referrer",href:"https://github.com/Chris0698/Lottery",className:"codeButton"},"View Code"))),r.createElement(n.Link,{to:"/#projects",className:"backToProjectsButton"},"Back To Projects"))}}}]);
//# sourceMappingURL=component---src-pages-lottery-js-3fd88bf8d7894cacc680.js.map