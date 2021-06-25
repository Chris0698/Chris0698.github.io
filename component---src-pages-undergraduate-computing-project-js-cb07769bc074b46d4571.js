(self.webpackChunkchris_aston_web_portfolio=self.webpackChunkchris_aston_web_portfolio||[]).push([[830],{1702:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return l}});var a=o(7294),n=o(9111),r=o(5444),i=o.p+"static/robot-735ac5888af75b7326a08340724957bb.jpg",d=o.p+"static/CircuitDiagram-ced46cb7ec65a8a6c7732c95b428c731.jpg",l=function(){return a.createElement(n.Z,null,a.createElement("h1",{className:"projectHeading"},"Undergraduate Computing Project"),a.createElement("div",{id:"projects-images"},a.createElement("figure",{className:"slides"},a.createElement("img",{src:i,alt:"Photo of the robot",id:"robotImage",title:"Photo of the robot"}),a.createElement("figcaption",null,"Picture of the final robot with all the hardware components connected.")),a.createElement("figure",{className:"slides undergradSlides"},a.createElement("img",{src:d,alt:"Photo of the robot",id:"robotImage",title:"Robot circuit diagram"}),a.createElement("figcaption",null,"Hand drawn sketch of the circuit to power the entire robot."))),a.createElement("div",{className:"projectInfo"},a.createElement("div",{className:"projectInfoCol1"},a.createElement("h2",null,"Overview"),a.createElement("p",null,"For my Undergraduate Computing project i chose to do an embedded system project. For this project, the aim was to develop a robot that captures data of its location and saves it. The data was then to be inputted into a software application to produce a map of the room by using a ",a.createElement("a",{className:"webLink",target:"_blank",rel:"noopener no referrer",href:"https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping"},"simultaneous localization and mapping")," (SLAM) algorithm. For this project, a robot was to be programmed in C++ and code was uploaded a micro controller which was the main controller. An RPLidar was used to get data measurements and was to be controlled by the microcontroller. Additionally, the data captured had to be accurate because this data was being used to handle the movement of the robot. The movement of the robot was to be handled by the chassis where all the hardware components sat on. Finally for the robot, a suitable method of powering the robot had to be planned and implemented. For the map, it was envisioned that a simple Java application using Swing components would get the data and used an open source SLAM algorithm where the map would either be saved as an imgae file or presented on the UI."),a.createElement("p",null,"For this dissertation i began with an analysis of the problem and existing published works into SLAM exists and how other robots navigate. I also looked into what software and hardware tools i had available to use. For the hardware, i used an ",a.createElement("a",{className:"webLink",target:"_blank",rel:"noopener no referrer",href:"https://os.mbed.com/platforms/FRDM-K64F/"},"FRDM-K64F Mbed board")," and used Mbed OS5, an RTOS to ease development. A tri-wheeled chassis was used since this had the motors built in, removing any need of soldering motors. Next i then moved on to designs, i produced a class disagram for the Java application and a circuit diagram for the hardware. I did not produce a design for the robot itself however because i was resisted where other hardware components could be placed on the chassis, so i judged it to be pointless."),a.createElement("p",null,"I approached this project by breaking it down into smaller components. The first component involved writing code to communicate between the microcontroller and Lidar and collecting data. The second component involved how i can power the entire robot and Lidar using a battery. The third component involved using the data and doing research into tri-wheeled chassis to move the robot without colliding into walls and furniture. Finally, the fourth component involved saving the data and developing the Java application to read the data and produce the map."),a.createElement("p",null,"As i progressed through the project i had to overcome many challenges. The first challenge was powering the robot. What i discovered is that a 5V mobile phone charge bank could power the microcontroller and Lidar only. The voltage was not sufficient to power the three motors as they were 12V. This issue was discovered when i could collect data, but the robot did not move. To overcome this, i brought a 16V Lipo battery then used a voltage regulator to reduce it down to 12V, this power supply then went into the motor driver shield which got the robot moving. The next challenge was about saving the data and at what rate. The plan was to use a file (no extension) to contain the data, however, i found it easier to save the data in JSON form. As for the rate, this depended on how quickly the microcontroller could save to the SD card mounted. The microcontroller could only store a small amount in memory so if the robot was collecting data quicker than being saved, the robot would run into a bad alloc exception. Investigating this showed that the robot did get more data quicker than it was saving, so to overcome this i found what was close to the maximum amount of data it could store, then the robot would stop, save all of the data, clear the captured data from memory, then start again."),a.createElement("p",null,"Unfortunately, due to project complexity, the entire project was not completed to what was envisioned. Development time was lost on waiting for the motor driver shield to arrive, then it got damaged when i failed to realised that the battery was outputting more voltage after a full recharge, so i had to wait for its replacement to arrive. The robot movement was also janky and could not overcome carpet friction in some places which did also meant the movement was bizarre and unpredictable in some places, depending on the floor surface. The data captured looked inaccurate in some places, despite poor quality being filtered out which could have an impact. There was very limited time to produce the Java application, i managed to get the data from the SD to be read and then i decided to output the data on a terminal window. I did not have enough development time to add the SLAM algorithm."),a.createElement("p",null,"I hope to complete it in my own time. Changes i would make include improving the movement of the robot and look at the producing the map by using the SLAM library features found in MatLab, this would replace the Java application but would require the data saved to the SD card to be potentially in a different format.")),a.createElement("div",{className:"projectInfoCol2"},a.createElement("p",null,"Date: 2018 - 2019"),a.createElement("p",null,"Module mark: 60"),a.createElement("p",{className:"cardLanguage"},"C++ and Java"))),a.createElement(r.Link,{to:"/#projects",className:"backToProjectsButton"},"Back To Projects"))}}}]);
//# sourceMappingURL=component---src-pages-undergraduate-computing-project-js-cb07769bc074b46d4571.js.map