import React from 'react';
import { useState } from 'react'
import Card from './components/Card'

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center p-10 ">
      <h1 className="bg-green-400 text-black text-center rounded-xl p-4 w-1/2">
        Tailwind Test
      </h1>
  
  <Card username="Yash" btnText="Click me"  customimage="https://th.bing.com/th?id=OIP.GPFEY6kfgxbsja6gmrW6rwAAAA&w=306&h=203&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" />
  <Card username="Delba"  btnText="Click me" customimage="https://th.bing.com/th/id/OIP.x1CLmYnRmQVCzbjKnkgcRAAAAA?w=118&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
  <Card username="Delba"  btnText="Click me" customimage="
  https://th.bing.com/th/id/OIP.x1CLmYnRmQVCzbjKnkgcRAAAAA?w=118&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>

       {
       /* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src=".\src\bu.jpg" alt="" width="384" height="512" /> 
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
    
  </div>
</figure> */
}
    </div>
  );
}

export default App;
