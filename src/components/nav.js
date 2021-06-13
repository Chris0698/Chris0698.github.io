import { Link } from "gatsby";
import React, { useState } from "react"
import styled, {css} from "styled-components"
import {navLinks} from "../config"
import Menu from "../components/menu"
import ScrollDirection from "../hooks/scroll"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Nav = () => {

  // https://medium.com/mtholla/create-a-transitioning-header-using-react-hooks-like-mediums-c70ed211f7c9
  const [shouldHideHeader, setShouldHideHeader] = useState(false);

  const MIN_SCROLL = 80;
  const TIME_DELAY = 200;

  ScrollDirection(callbackData => {
    const {previousScrollTop, currentScrollTop} = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinScrolled = currentScrollTop > MIN_SCROLL;

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinScrolled);
    }, TIME_DELAY);
  });

  const hiddenStyle = shouldHideHeader ? 'hidden' : '';

  return(
    <header className={`styledHeader ${hiddenStyle}`}>
      <div className="styledNav">
        <Link to="/" className="home">Chris Aston</Link>
        <div className="styledLinks">
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
        </div>
        <TransitionGroup component={null}>
          <CSSTransition>
            <Menu/>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </header>
  );
};

export default Nav;