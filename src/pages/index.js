import React from "react"
import About from "../components/sections/about"
import Layout from "../components/layout"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"
import Intro from "../components/sections/Intro"

const Index = ({location}) => {
  return (
    <Layout>
        <Intro/>
        <About/>
        <Projects/>
        <Contact/>
    </Layout>
  );
}

export default Index