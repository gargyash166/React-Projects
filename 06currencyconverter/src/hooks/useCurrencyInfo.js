// function hello(){
//     return []
// } // ex of custom hook

import { useEffect,useState } from "react";


    // jdatr hooks k piche use hota h y ek standrised approch h
function useCurrencyInfo (currency) {  
    const [data,SetData] = useState({})

          // is method s automatically fetch ho jyga
    useEffect (() => {
        //fetch k undr jo h vo hum api fetch kar rhe h or data jo  h vo data string m h pr humko json m chyr
        // is link m jh brakt m currency likha h uska mtlb h hum jis bhi cuntry ka curry isme likhte h y usi formt m d dga
        fetch
      //  (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            ('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json')
                 // convrt into .json
            .then((res) => res.json())
            // storing the data in setData
            .then((res) => SetData(res[currency]))
            // for checking what value comes in data in console
            console.log(data);
    },
    [currency] // if chnge in curry then call it so it is a dependncy arry
  ) 
    console.log(data);
    return data
 // return some data
}

export default useCurrencyInfo;