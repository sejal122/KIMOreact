import React, { useState } from 'react'

function Conditional() {
    const[isLoggedIn,setIsLoggedIn]=useState(true)
    let notifications=10
    return(
        <>
       <h1>Welcome {isLoggedIn? " User" : " Guest"}!

        </h1> 

        <h4> {notifications>0 && 'You have new notifications...'}</h4>
        </>
    )
   
}


// function GreetUser(){
// return <h1>Welcome User!</h1>
// }

// function GreetGuest(){
//     return <h1>Welcome Guest!</h1>
// }
export default Conditional
