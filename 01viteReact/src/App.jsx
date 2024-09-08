import Chai from "./chai"
function App() {
    const username = "Chai aur Code"
  return (

//<Chai/>

 // HUM iske undr ek he tag return kar skte hai 
 //isi wjh s react m agr humko jda chz ek sat return karani hai tho hum div tag k undr dal k kar skte hai
 // ya fr fragment tag k undr <></> kar skte exple niche hai

<>
<Chai/>
<h1> example of many retuns in one tag (from App.jsx)</h1>
<p> hum isko div tag s bhi chla skte h (from App.jsx) </p>
<h1>React ke sath {username} (by const username)</h1>
  
</>
// agar hum {} ke under kuch likhte h tag k under tho ko ek variablr ki trf treat hoga exple username (evaluted expression- only final outcome) (ExampleofVariable)
// kuki hume username ki value pass kr de h upr tho vo vhi s le lga bs {usename} likh kar
// iss s hmri coding easy understanding hoti h agr ek he chz br br print karni tho simple hum asse variable bna kr skte  hai
  )
}

export default App
