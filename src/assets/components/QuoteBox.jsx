import baseColors from '../baseColors.json'
import animeBase from '../animeBase.json'
import dataBase from '../dataBase.json'
import { useState } from 'react'

const QuoteBox = () => {



    const random = Math.floor(Math.random() * dataBase.length);

    // random variable to JSON dataBase

    const [index, setIndex] = useState(random)

    

    //  Button function to shuffle 

    const change = () => {
        const newRandom = Math.floor(Math.random() * dataBase.length);
         setIndex(newRandom);
    }  
   
    // random variable to backGround Color

   const backgroundrandom = Math.floor(Math.random() *baseColors.length)
   
//    const [colorLetter, setColorLetter] = useState(backgroundrandom)

   document.body.style = `background: ${baseColors[backgroundrandom].hex}`

    // setColorLetter( {
    //         color: `${baseColors[backgroundrandom].hex}`
    //     })
                    
                
      return(

          <div className="quoteBox" >
            <div className="quote">

                <i className="fas fa-quote-left"></i>
                <p>{dataBase[index].quote}</p>

            </div>
                
            <h2 
            >{dataBase[index].author}</h2>

            <div className="conter-boton">

                <button onClick = {change} className='btn-shuffle'> <i className="fas fa-chevron-right"></i></button>
                
            </div>
            
         </div>
      )
  
    }
  export default QuoteBox;