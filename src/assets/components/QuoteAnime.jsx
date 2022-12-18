import baseColors from '../baseColors.json'
import animeBase from '../animeBase.json'
import dataBase from '../dataBase.json'
import { useState } from 'react'

const QuoteAnime = () => {

    const random = Math.floor(Math.random() * animeBase.length);
    const [index, setIndex] = useState(random)

    const change = () => {
        const newRandom = Math.floor(Math.random() * animeBase.length);
         setIndex(newRandom);
    }  
   

   const backgroundrandom = Math.floor(Math.random() *baseColors.length)

   document.body.style = `background: ${baseColors[backgroundrandom].hex}`

  
      return(

          <div className="quoteBox">
          <div className="quote">

          <i className="fas fa-quote-left"></i>
            <p>{animeBase[index].quote}</p>

          </div>
            
            <h2>{animeBase[index].name}</h2>

            <div className="conter-boton">

            
            <button onClick = {change} className='btn-shuffle'> <i className="fas fa-chevron-right"></i></button>
            
            </div>
            
         </div>
      )
  
    }
  export default QuoteAnime;