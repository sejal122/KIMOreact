import React,{useState} from 'react'
function Name(props){
// const {age,username}=props // destructing of props
const [name,setName]=useState('rahul')
const [counter,setCounter]=useState(0) //declaring , initializing the state
//const [variable-name , function-name] = useState(initial-value)
//name='sejal' --> cannot do

// setName('sejal')

//const name='rahul'
//name='sejal'
const increment =()=>{
    setCounter(counter+1) //update the state
}
    return(
        <div>
            {/* <h3>User : {props.username} </h3> */}
            <h3>Value of name state is : {name}</h3>
            <h5>Age is {props.age}</h5>
            <h4>Counter : {counter}</h4>
            <button onClick={increment}>+</button> <button>-</button>
        </div>
    )
}

export default Name;