import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

  const activeTabHandler=({isActive})=>{
    return isActive ? 'active-tab' : 'inactive-tab';
  }

  return (
    <div>
        <ul>
          {/* <li><NavLink to='' className={activeTabHandler}>Home</NavLink></li>

          <li><NavLink to='about' className={activeTabHandler}>About</NavLink></li>

          <li><NavLink to='help' className={activeTabHandler}>Help</NavLink></li> */}
        </ul>
    </div>
  )
}

export default Header