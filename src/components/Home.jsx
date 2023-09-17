import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const activeTabHandler=({isActive})=>{
    return isActive ? 'active-tab' : 'inactive-tab';
  }
  return (
    <div>
      <h1>
        Home page 
        
        <div>
        <NavLink to='about' className={activeTabHandler}>About</NavLink>
        </div>
      </h1>
    </div>
  )
}

export default Home