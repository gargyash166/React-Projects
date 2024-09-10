import { useCallback, useEffect, useState,useRef } from 'react';

function App() {
  const [length,setlength] = useState(8)
  const [numAllowed,setnumAlloweds] = useState(false);
  const [charAllowed,setcharAlloweds] = useState(false);
  const [psswrd,setpsswrd] = useState("")

//useref hook

const psswrdRef = useRef(null)

  const passwrdGenerator =useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
       if(numAllowed) str += "0123456789"
       if(charAllowed) str += "!@#$%^&*_+[(.,-/~?"

       for(let i =1; i <=length;i++){
        let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      }
      setpsswrd(pass)

  }
    ,[length,numAllowed,charAllowed , setpsswrd])

    const copyPasswordToClipboard = useCallback(() => {
      psswrdRef.current?.select();
      //psswrdRef.current?.setSelectionRange(0,3); 
      window.navigator.clipboard.writeText(psswrd)
    },[psswrd])

useEffect(() => {passwrdGenerator()},[length,numAllowed,
  charAllowed ,passwrdGenerator])

  return (

   <div className='w-full max-w-md mx-auto shadow-md
   rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>

    <h1 className='text-white text-center my-3'>
      Password Generator</h1>

    <div className='flex shadow rounded-lg overflow-hidden
    mb-4'>

      <input type='"text'
      value={psswrd}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly 
      ref={psswrdRef}
      />

      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white
      px-3 py-0.5 shrink-0 hover:bg-sky-400'
      >copy</button>

    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        
        <input type="range"
        min={8}
        max={100}
        value={length}
        className='cursor-pointer' 
        onChange={(e) => {setlength(e.target.value)}}
        />
      <label>Length: {length} </label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'

          defaultChecked={numAllowed}
          id='numberInput'
          onChange={() => {
            setnumAlloweds((prev) => !prev)
          }}
          /> <label>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={() => {
            setcharAlloweds((prev) => !prev)
          }}
          /> <label>Characters</label>
       </div>
    </div>
    
   </div>
  );
}

export default App;
