import { useState, useEffect } from 'react'; //React Hook imports
import './App.css';

//This is a COMPONENT - reference it as a self-closing tag in any other component to display all its HTML
const Person = () => {
  return(
    <>
      <h1>Name: John</h1>
      <h2>Last Name: Doe</h2>
      <h2>Age: 30</h2>
    </>
  )
}


const Person2 = (props) => {
  return(
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {

  let name = "Jane";
  const isNameShowing = true;

  //React State for Counter
  const [counter, setCounter] = useState(0);

  //React State for hookedCounter - showing how usestates work w/ useeffects
  const [hookedCounter, setHookedCounter] = useState(0);

  
  //This useEffect will set the hooked counter to 100 on page load
  useEffect(() => {
    //Note that you must use SET hooked counter instead of just assigning it
    setHookedCounter(100);
  }, []) //The empty param set at the bottom prevents this from setting ctr to 100 literally every sec


  //This useEffect will alert the user when hookedCtr is changed
  useEffect(() => {
    alert("You've changed the counter to " + hookedCounter);
  }, [hookedCounter]); //this param set indicates the useeffect should be called anytime hookedCtr is altered

  return (
    <div className="App">

      {/* Demonstration of conditionals w/ ternary operator */}
      <h1>Hello, {name ?  name : 'someone'}!</h1>

      <hr />


      {/* Demonstration of conditionals w/ React Fragments - if you want to use html tags
      in a conditional, you should wrap it in a React Fragment <></>. Required if using
      multiple tags. */}
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>Test</h1>
          <h2>There is no name</h2>
        </>
      )}

      <hr />

      {/* Demonstration of other Component (static) */}
      <Person />

      <hr />

      {/* Demonstration of other Component (dynamic w/ props) */}
      <Person2 name={"Jerry"} lastName={"Seinfeld"} age={47} />
      <Person2 
        name="George" 
        lastName="Costanza" 
        age={47 - 1}
      />

      <hr />

      {/* Demonstration of useStates with a counter button */}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

      <hr />
      
      <button onClick={() => setHookedCounter((prevHookedCount) => prevHookedCount - 1)}>-</button>
      <h1>{hookedCounter}</h1>
      <button onClick={() => setHookedCounter((prevHookedCount) => prevHookedCount + 1)}>+</button>


        <br />
        <br />
    </div>
    
  );
}

export default App;
