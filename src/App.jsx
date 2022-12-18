import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuoteBox from './assets/components/QuoteBox'
import QuoteAnime from './assets/components/QuoteAnime'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <QuoteBox/>


      {/* You can uncommen if you want to see anime version */}
      
      {/* <br/>
      <hr />
      <div className="title">

       <h1>Anime Version</h1>
       <i class="fa-solid fa-chevron-down"></i>
      </div>
      <br/>
      <QuoteAnime/> */}
     
      
    </div>
  )
}

export default App
