import React from 'react'
import { Link, Outlet } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
    <nav className=" navbar navbar-expand-lg  text-center  fixed-top ">
    
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item navItems px-2">
            <Link className="nav-link active" to="/" >
              ALL
            </Link>
          </li>
          <li className="nav-item navItems px-2">
            <Link className="nav-link"  to="/fullstack">
              FULL STACK DEVELOPMENT
            </Link>
          </li>
          <li className="nav-item navItems px-2">
            <Link className="nav-link" to="/datascience">
              DATA SCIENCE
            </Link>
          </li>
          <li className="nav-item navItems px-2">
            <Link className="nav-link" to="/cybersecurity">
              CYBER SECURITY
            </Link>
          </li>
          <li className="nav-item navItems px-2">
            <Link className="nav-link" to="/career" >
              CAREER
            </Link>
          </li>
        </ul>
      </div>
      <hr/>
    </nav>
    
  </div>
  )
}

export default Nav