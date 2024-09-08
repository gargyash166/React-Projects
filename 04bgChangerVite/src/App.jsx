import { useState } from "react"
function App() {
  const [color, setcolor] = useState('')

  return (
  <div className="w-full h-screen duration-200" 
  style={{backgroundColor: color}}
  >
    {/* <h1>YOUR COLOR HAS CHANGED ITs" {color}</h1> */}
    <div className="fixed flex flex-wrap
    justify-center bottom-12 inset-x-0 px-2">

      <div className="flex flex-wrap
    justify-center gap-3 shadow-lg bg-white px-2 py-2
    rounded-3xl">
       <button 
        onClick={() => setcolor("red")}
       className="outline-none px-4 py-1 rounded-full
       text-white shadoe-lg"
      style={{backgroundColor: "red"}}
      >Red</button>

       <button          onClick={() => setcolor("purple")}
        className="outline-none px-4 py-1 rounded-full
       text-white shadoe-lg"
      style={{backgroundColor: "purple"}}
      >Purple</button>

      <button         onClick={() => setcolor("green")}
       className="outline-none px-4 py-1 rounded-full
       text-white shadoe-lg"
      style={{backgroundColor: "green"}}
      >Green</button>

       <button         onClick={() => setcolor("orange")}
      className="outline-none px-4 py-1 rounded-full
       text-white shadoe-lg"
      style={{backgroundColor: "orange"}}
      >Orange</button>

      <button         onClick={() => setcolor("pink")}
      className="outline-none px-4 py-1 rounded-full
      text-white shadoe-lg"
     style={{backgroundColor: "pink"}}
     >Pink</button>

      <button          onClick={() => setcolor("blue")}
        className="outline-none px-4 py-1 rounded-full
     text-white shadoe-lg"
    style={{backgroundColor: "blue"}}
    >Blue</button>

     <button         onClick={() => setcolor("black")}
      className="outline-none px-4 py-1 rounded-full
    text-white shadoe-lg"
   style={{backgroundColor: "black"}}
   >Black</button>
   
<button         onClick={() => setcolor("gray")}
      className="outline-none px-4 py-1 rounded-full
    text-white shadoe-lg"
   style={{backgroundColor: "gray"}}
   >Gray</button>

   
<button         onClick={() => setcolor("brown")}
      className="outline-none px-4 py-1 rounded-full
    text-white shadoe-lg"
   style={{backgroundColor: "brown"}}
   >Brown</button>
    </div>
    </div>
  </div>
  )
}

export default App
