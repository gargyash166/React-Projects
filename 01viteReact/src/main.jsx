import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

function DemoApp() {
    return (
        <div>
            <h1> demo of if we add a function in  direct main.jsx and the code runs</h1>
         </div>
    )
}

const secondDemo = (
    <a href="https://google.com" target='_blank'>Visit
     Google</a> // here target use for site  open in new tab
)

const AnotherExampleofVariable = "Chai or react"

const reactElement = React.createElement(
    'a',
    { href: 'https://google.com',target:'_blank' },'Click to Visit Google' ,
    AnotherExampleofVariable
)




createRoot(document.getElementById('root')).
render(
    reactElement
   //secondDemo , //object ko ase he chla dga nm likh kr
    //<DemoApp />  // hum isko dirct function s bhi call kr skte hai //DemoApp()
   // <App />
    
    
)
