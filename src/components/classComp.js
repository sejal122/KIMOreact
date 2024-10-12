import React from 'react'
class ClassComp extends React.Component{
    constructor(){
        super();
        this.state={
            counter:0,
            score:20,
            name:'rajat'
        }
    }
    handleClick=()=>{

            alert('btn clicked')
    }
    increment =()=>{
        this.setState({score:this.state.score+1})
         //update the state
    }
    render(){
       // const {username,age}=this.props ---> destructure props
        return(
        <div>
            <h3>hi {this.props.username} from Class component, my age is {this.props.age} </h3>

            <h3>Class comp score is : {this.state.score}</h3>

            <button onClick={this.increment}>+</button> <button>-</button>

            <button onClick={this.handleClick}>Click</button>
        </div>
    )
    }
}
export default ClassComp;