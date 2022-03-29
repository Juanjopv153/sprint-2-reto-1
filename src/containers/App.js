import React from 'react'
import { HeaderImage } from '../styled/App'
import CardsContainer from './CardsContainer'
import Categories from '../context/categories'

const valor = {
    dataCategorie: null,
    state: false
}
const App = () => {
  return (

        <Categories.Provider value={valor}>
         <div>
            <HeaderImage src={'https://res.cloudinary.com/nohay/image/upload/v1648367425/sprintDos/RetoUno/rnfvsvvfvx3fqqej61y5.svg'} alt="A"/>
            <CardsContainer/>
         </div>
        </Categories.Provider>
  )
}

export default App