import React, { useState } from 'react'

function RenderList() {
    const [notification,setNotification]=useState([
        "new Update available" , "You have new message","Setup autopay"
    ])
    const [user,setUser]=useState([ 
        {name:'Sejal',city:'satara',contact:8989888888},
        {name:'raj',city:'pune',contact:666666666},
        {name:'tara',city:'mumbai',contact:4444444},
        {name:'rahul',city:'wai',contact:5343543534}
    
    ])
    return (
        <>
      
        {user.map(u=>{
      return <div style={{padding:'10px' , border:'1px solid black',margin:'20px'}}>
        <h1>{u.name}</h1>
        <h3>{u.contact}</h3>
        <h5>{u.city}</h5>
      </div>
        })}
    
        
 
        
        </>
    )
}

export default RenderList
