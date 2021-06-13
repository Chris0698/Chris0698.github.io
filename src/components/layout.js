import React from "react"
import Nav from "./nav"
import Head from "./head"

import GlobalStyle from "../styles/style"

// import "./layout.css"
// import "./style.css"

import "./style.scss"


const Layout = (props) => {
  return (
    <div>
      <GlobalStyle/>
      <Head/>
      <Nav />
      <div id="content">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;