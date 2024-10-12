import "./App.css";
import Name from "./components/name";
import ClassComp from "./components/classComp";
import Events from "./components/events";
import Conditional from "./components/conditional";
import RenderList from "./components/renderList";
function App() {
  //js code
  let name = "Rohit";
  let age = "31";
  return (
    <div className="App">
      {/* <h1 id="h1">Welcome {name} !</h1>

      <Name username={name} age={age}/>

      <ClassComp username={name} age={age}/> */}
      {/* <Events/>
      <Conditional/> */}
      <RenderList/>
    </div>
  );
}

export default App;
