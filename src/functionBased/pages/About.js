import React from "react"
import { Link, Outlet } from "react-router-dom"

const About = () => {
  return (
    <div>
      <Link to='about-app'>About App</Link>
      <Link to='about-author'>About Author</Link>
      <Outlet />
    </div>
  )
}
export default About