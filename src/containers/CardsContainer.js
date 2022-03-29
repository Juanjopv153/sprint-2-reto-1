import React, { useState, useEffect } from 'react'
import { url } from './../helpers/url'
import axios from 'axios'
import Cards from './../components/Cards'
import CardsCategories from './../components/CardsCategories'
import { DivCard } from './../styled/Card'
const CardsContainer = () => {
    const [data, setData] = useState([])
    const [dataCategories, setCategories] = useState([])
    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(dataCategories))
        getData()
    }, [dataCategories])


    const getData = () => {
        axios.get(url)
            .then(resp => {
                setData(resp.data)
            })
            .catch(error => {
                console.error(error);
            })
    }

    const getCategories = (({ target }) => {
        if(dataCategories.length === 0){
            setCategories([target.id])
        }
        else{
            setCategories([
                ...dataCategories,
                target.id
            ])
            dataCategories.forEach(elem => {
                if (elem === target.id) {
                    if(dataCategories.length > 1){
                        const dataFilter = dataCategories.filter(elem => {
                            return elem !== target.id
                        })
                        setCategories(dataFilter)
                    }
                    else{
                        setCategories([])
                    }
                }
                 
            })
        }
    })



    return (

        <div>
            {
            data.map(({ id, url, RangeName, name, tickets, timeSigning, time, countryJob, categories, newSection }) => {
                return (
                <DivCard key = { id } >
                    <div className = { newSection ? 'newSection' : 'newSectionFalse' } >
                    </div> <div className = 'section1' >

                    <img src = { url }
                    alt = "user" />
                    <Cards name = { name }
                    rangeName = { RangeName }
                    timeSig = { timeSigning }
                    time = { time }
                    countryJob = { countryJob }
                    tickets = {
                        tickets.map(feature => {
                            return ( <span className = { `feature ${feature === "NEW!" ? 'new' : 'featured'}` } > { feature } </span>
                            )
                        })
                    }/>
                    </div>
                    <CardsCategories categorie = {
                        categories.map(categorie => {
                            return ( 
                            <span className = 'spanCards'
                                id = { categorie }
                                onClick = { getCategories } > { categorie } 
                            </span>

                            )
                        })
                    }
                    /> </DivCard>
                )
            })
        } </div>
    )
}

export default CardsContainer