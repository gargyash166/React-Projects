import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/usecurrencyinfo'
function App() {
  const [amount,setamount] = useState(0)
  const[from,setfrom] = useState("usd")
  const[to,setto] = useState("inr")
  const[convrtamt,setconvrtamt] = useState(0)

  const currencyinfo = useCurrencyInfo(from)

  const options = Object.keys(currencyinfo)

  const swap= () =>{
    setfrom(from)
    setto(to)
    setconvrtamt(amount)
    setamount(convrtamt)
  }

 const convrt =() => {
  setconvrtamt(amount * currencyinfo[to])
 }
 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://th.bing.com/th/id/OIP.Y8Z3c8YVpddjh_8e-AYhOAHaFf?w=1001&h=742&rs=1&pid=ImgDetMain')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convrt()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) =>
                            setfrom(amount)
                          }                         
                             selectCurrency ={from}
                             onAmountChange={(amount) =>setamount(amount)}

                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convrtamt}
                          currencyOptions={options}
                          onCurrencyChange={(currency) =>
                            setfrom(currency) }                         
                             selectCurrency ={to}
                             amountDisable
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);

}

export default App
