import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UserInfo = () => {

  const {userID} = useParams()

  useEffect(()=>{
    
  },[])


  return (
    <div style={{border:'1px solid gray',width: '25em', height: '15em'}}>
       <h3> User Info of <h1 style={{color:'red'}}>User {userID}</h1></h3> 
    </div>
  )
}

export default UserInfo