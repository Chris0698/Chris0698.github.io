import React, { useState, useEffect } from 'react';
import {throttle} from "lodash"

const ScrollDirection = (callback) => {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  function handleScroll() {
    const {scrollTop : currentScrollTop} = document.documentElement || document.body;

    setScrollPosition(previousPosition => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({previousScrollTop, currentScrollTop});
  }

  const handleDocumentScroll = throttle(handleScroll, 250);

  useEffect(() => {
    window.addEventListener("scroll", handleDocumentScroll);

    return () => 
      window.removeEventListener("scroll", handleDocumentScroll);
    }, []);
};

export default ScrollDirection;