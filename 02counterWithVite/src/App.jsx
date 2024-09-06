import './App.css'
import { useState } from 'react';

function App() {

  let [counter,setCounter] = useState(5) 
   /*
   [yash, setyash]  iska nm kuch bhi rakh skte hai iska km bs object bnna h  ex [login, setlogin],[isloggedin , setisloggedin]
   useState ek hook h jo ki state ko change karta h in dom(UI)
   usestate k undr kuch bhi value d skte h ex true, false, koi bhi nam, ya funtion({})
   */

  //let counter = 5 
   
  const  addValue = () => {
  //  console.log("Value Added ",  Math.random()); // for check the funtion is working or not
  if(counter < 30 ){ 
  console.log("Clicked",  );
  counter = counter + 1;
  setCounter(counter)
  }
  }
  const removeValue = () =>{
    if(counter>0){
    console.log("Clicked"); 
       // counter = counter -1;
   setCounter(counter - 1)
  }}
  return (
   <>
   <h1>Chai or React</h1>
   <h2>Counter value: {counter}</h2>

   <button onClick= {addValue}>Add Value</button>
   <br/>
   <button onClick={removeValue}>Remove Value</button>
   </>
  )
}

export default App
