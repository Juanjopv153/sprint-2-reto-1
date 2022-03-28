import React from 'react'
import { DivCards} from '../styled/CardsCategories'

const CardsCategories = (props) => {
  return (
    <DivCards>
      {props.categorie}
    </DivCards>
  )
}

export default CardsCategories