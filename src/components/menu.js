
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import styled, {css} from "styled-components"
import {navLinks} from "../config"
import { Link } from "gatsby";
import Styled from "styled-components"

const StyledMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledHamburgerButton = styled.button`
  @media screen and (max-width: 768px) {
    position: absolute;
    right: 5%;
    z-index: 10;
    //margin-right: -15px;
    padding: 15px;
    //border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .hamburger-box {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
  }

  .hamburger-box-inner {
    color: var(--light-navy); /*Hack to stop test being visible*/
    position: absolute;
    top: 50%;
    right: 0;
    width: 30;
    height: 2px;
    border-radius: 4px;
    background-color: var(--green);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 30px;
      height: 2px;
      border-radius: 4px;
      background-color: var(--green);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${props => (props.menuOpen ? `100%` : `120%`)};
      top: ${props => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${props => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) =>
        menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }
    &:after {
      width: ${props => (props.menuOpen ? `100%` : `80%`)};
      bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) => (menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
    }
  }
`;

const StyledSideBar = styled.div`
  // @media screen and (max-width: 768px) {
  //   position: fixed;
  //   height: 100%;
  //   overflow-x: hidden;
  //   overflow-y: hidden;
  //   //backdrop-filter: blur(10px);
  //   top: 0;
  //   bottom: 0;
  //   right: 0;
  //   padding: 50px 10px;
  //   width: min(75vw, 400px);
  //   min-height: 100vh;
  //   //min-height: 100%;
  //   outline: 0;
  //   background-color: var(--light-navy);
  //   box-shadow: -10px 0px 30px -15px var(--navy-shadow);
  //   z-index: 9;
  //   //this causes a horizontal scroll bar on edge and chrome.
  //   //transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  //   visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  //   transition: var(--transition);
  }

  nav {
    // width: 100%;
    // flex-direction: column;
    // color: var(--lightest-slate);
    // font-family: var(--font-mono);
    // text-align: center;
  }

  ol {
    // padding: 0;
    // margin: 0;
    // list-style: none;
    // width: 100%;

    // li {
    //   margin: 50px auto 20px;

    //   &:before {
    //     display: block;
    //     margin-bottom: 5px;
    //     color: var(--green);
    //     font-size: var(--fz-sm);
    //   }
    // }

    // a {
    //   //background-color: pink;
    //   width: 100%;
    //   //padding: 30px 20px 20px;
    //   color: white;
    //   text-decoration: none;
    // }
  }
`;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef(null);

  const onResize = e => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return(
    <div className="styledMenu">
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>
      <StyledHamburgerButton onClick={toggleMenu} menuOpen={menuOpen} ref={buttonRef}>
        <div className="hamburger-box">
          <div className="hamburger-box-inner">test</div>
        </div>
      </StyledHamburgerButton>
      <StyledSideBar menuOpen={menuOpen} aria-hidden={!menuOpen}>
        <nav>
          <ol>
            {navLinks && navLinks.map(({url, name}, i) => 
              ( <li>
                  <Link to={url} onClick={() => setMenuOpen(false)} className="menuLink">{name}</Link>
                </li>)
              )
            } 
          </ol>
        </nav>
      </StyledSideBar>
    </div>
  );
}

export default Menu;