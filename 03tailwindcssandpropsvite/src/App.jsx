import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1 className='bg-green-400 text-black p-4 
  rounded-xl mb-4'> tailwind test</h1>
   
  <Card username="Yash" btnText="Click me"  customimage=" ../images/cam.jpg" />
  <Card username="Eshu" customimage=".\src\assets\O (1).jpg" />
  <Card username="Delba"  btnText="Click me" customimage="\bu.jpg"/>

  
  </>
  )
}

export default App
