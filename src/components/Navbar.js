import React, { useEffect } from "react"
import { Link } from "react-router-dom"
//styles and images
import "./navbar.css"
import temple from "../assets/temple.svg"
//COMPONENTS

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={temple} alt="" />
          <span>The project management app</span>
        </li>
        <li>
          <Link className="/login">login</Link>
        </li>
        <li>
          <Link className="/signup">signup</Link>
        </li>
        <li>
          <button className="btn">logout</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
