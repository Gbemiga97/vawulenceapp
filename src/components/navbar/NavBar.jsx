import { Link, NavLink } from "react-router-dom"
import "./navbar.css"
import { links } from '../../data'
import {FaBars} from 'react-icons/fa'
import {MdOutlineClose} from 'react-icons/md'
import { useState } from "react"


function NavBar() {
    const [ isShowing, setIsShowing] = useState(false)
  return (
    <nav>
    <div className="container nav__container" >
        <Link className="logo"
        onClick={() => setIsShowing(false)}
        to="/"
        >
        <img src='./assets/logo.png' alt="vawulence" />
        </Link>
        <ul className={`nav__links ${isShowing ? "show-nav" : "hide-nav"} `}> 
            {
                links.map(({name, path}, index) => {
                    return (
                        <li key={index} >
                            <NavLink 
                            to={path}
                            className={({isActive}) => isActive ? "active-nav" : ""}
                            onClick={() => setIsShowing(prevState => !prevState)}
                            >
                                {name}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
        <button 
        className="nav__toggle-btn"
        onClick={() => setIsShowing(prevState => !prevState)}
        >{
            isShowing ? <MdOutlineClose /> : <FaBars />
            }</button>
    </div>
    </nav>
  )
}

export default NavBar