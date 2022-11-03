import React from "react"
import { Link, Outlet } from "react-router-dom"

const About = () => {
  return (
    <div className="about__content">
      <div className="about__list">
        <Link to='about-app'>About App</Link>
        <Link to='about-author'>About Author</Link>
        <Outlet />
      </div>
    </div>
  )
}
export default About