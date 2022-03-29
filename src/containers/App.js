import React, { Component } from 'react'
// import Prueba from '../components/Prueba'
import { HeaderImage } from '../styled/App'
import CardsContainer from './CardsContainer'


export default class App extends Component {
    render() {
        return (
            <div>
                <HeaderImage src={'https://res.cloudinary.com/nohay/image/upload/v1648367425/sprintDos/RetoUno/rnfvsvvfvx3fqqej61y5.svg'} alt="A"/>
                <CardsContainer/>
            </div>
        )
    }
}
