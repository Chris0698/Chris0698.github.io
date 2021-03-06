import React from "react"
import About from "../components/sections/about"
import Layout from "../components/layout"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"
import Intro from "../components/sections/Intro"
import Footer from "../components/sections/footer"

const Index = ({location}) => {
  return (
    <Layout>
        <Intro/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </Layout>
  );
}

export default Index