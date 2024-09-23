import './App.css'
import { useState,useEffect } from 'react'
import ThemeBtn from './components/Themebtn'
import useTheme, { ThemeProvider } from './context/theme'
import Cart from './components/Cart'
function App() {

  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

// acutal change in theme

useEffect(() => {
  document.querySelector('html').classList.remove("light",
    "dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])
  



  return (
   <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
   <div className="flex flex-wrap min-h-screen items-center">
     <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
       <ThemeBtn/>
        </div>
   
          <div className="w-full max-w-sm mx-auto">
            <Cart/>
                       </div>
                   </div>
               </div>
   
               </ThemeProvider>
  )
}

export default App
