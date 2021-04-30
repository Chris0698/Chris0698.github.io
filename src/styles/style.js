import {createGlobalStyle} from "styled-components" 

const GlobalStyle = createGlobalStyle`
  :root {
    --green: #64ffda;
    --light-navy: #112240;
     
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --nav-height: 70px;
    --nav-scroll-height: 70px;

    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default GlobalStyle