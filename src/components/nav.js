import { Link } from "gatsby";
import React from "react"
import styled, {css} from "styled-components"
import {navLinks} from "../config"
import Menu from "../components/menu"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 11;
  width: 100%;
  height: var(--nav-height);
  background-color: #112240;
  background-color: rgba(10, 25, 47, 0.6);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);
`;

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 12;
  //background-color: green;
`;

const StyledLinks = styled.div`
  //background-color: pink;
  @media screen and (max-width: 768px) {
    display: none;
  }
  margin-right: 5%;
  width: 50%;

  ol {
    //background-color: red;
    padding: 0;
    margin: 0;
    float: right;
    margin-top: 0;
    // padding-top: 3px;
    //margin-right: 5%;
    margin-top: 15px;
    li {
      display: inline-block;
      right: 30%;
      // background-color: red;
      margin-top: -2px;
      padding-top:0;
      a {
        // background-color: blue;
        color: white;
        text-decoration: none;
        font-size: 16px;
        //float: right;
        margin: 10px;
        //padding: 10px;
        float: right;
        text-align: right;
      }
    }
  }
`;

const Nav = () => {
  // const scrollDirection = useScrollDirection('down');
  // const [scrolledToTop, setScrolledToTop] = useState(true);

  // const handleScroll = () => {
  //   setScrolledToTop(window.pageYOffset < 50);
  // };

  return(
    <StyledHeader>
      <StyledNav>
        <Link to="/" className="home">Chris Aston</Link>
        <StyledLinks>
          <ol>
            <TransitionGroup>
              {navLinks && navLinks.map(({url, name}, i) => 
                (<CSSTransition key={i}>
                  <li>
                    <Link to={url} className="link">{name}</Link>
                  </li>
                </CSSTransition>))
              } 
            </TransitionGroup>
          </ol>
        </StyledLinks>
        <TransitionGroup component={null}>
          <CSSTransition>
            <Menu/>
          </CSSTransition>
        </TransitionGroup>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;