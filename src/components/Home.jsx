import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Home = () => {

 
  return (
    <div>
      <h1>
        Home page 
        </h1>
        <div className='home-user'>
          <div>
            <Link to='/user/1'> <h3>User 1</h3></Link>
            <Link to='/user/2'> <h3>User 2</h3></Link>
          </div>
        <div>
          <Outlet />
        </div>
        </div>
      
    </div>
  )
}

export default Home