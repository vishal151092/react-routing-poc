import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserInfo = () => {

  const {userID} = useParams()
  const [userData, setUserData] = useState({});

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
        setUserData(data)
    })
  },[userID])


  return (
    <div style={{border:'1px solid gray',width: '25em', height: '15em'}}>
       <h3>  <p style={{color:'red'}}>User {userData.name}</p></h3> 
       <div>
        <span>{userData.email} | {userData.phone}</span> 
       </div>

       
    </div>
  )
}

export default UserInfo