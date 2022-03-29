import React, { useState, useEffect } from 'react'
import { url } from './../helpers/url'
import axios from 'axios'
import Cards from './../components/Cards'
import CardsCategories from './../components/CardsCategories'
import useCategorie from '../hooks/useCategorie'
import { DivCard } from './../styled/Card'
const CardsContainer = () => {
    const dataCat = useCategorie()
    const [data, setData] = useState([])
    const [dataCategories, setCategories] = useState([])
    const [printDatos, setPrintDatos] = useState([])
    useEffect(() => {
        dataCat.dataCategorie = dataCategories
        localStorage.setItem('categories', JSON.stringify(dataCat.dataCategorie))
        showData()
    }, [dataCategories])

    const getData = () => {
        axios.get(url)
            .then(resp => {
                setData(resp.data)
                setPrintDatos(resp.data)
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

    const showData = ()=>{
        if(dataCategories.length === 0){
            getData()
            dataCat.state = false
            console.log(dataCat);
        }
        else{

            dataCat.state = true
            console.log(dataCat);
            let dataXDD = []
            let filterData = []
            let poto = []
            data.forEach(elemData=>{
                let dataXD = {}
                let dat = []
                dataCategories.forEach(elemCat=>{
                   dat.push(elemData.categories.some(e=>e.includes(elemCat)))
                    dataXD = {
                        data : elemData,
                        state : dat
                    }
                })
                dataXDD.push(dataXD)
        
            })

          dataXDD.forEach(elem=>{
              elem.state.forEach(elemMap=>{
                  if(elemMap === false){
                      elem.state = false
                  }
              })            
          })
          poto = dataXDD.filter(elem=>{
              return elem.state !== false
          })
          poto.forEach(elem=>{
              filterData.push(elem.data)
          })
          setPrintDatos(filterData)
            
        }
    }
    return (

        <div>
            {
            printDatos.map(({ id, url, RangeName, name, tickets, timeSigning, time, countryJob, categories, newSection }) => {
                return (
                <DivCard key = { id } >
                    <div className = { newSection ? 'newSection' : 'newSectionFalse' } ></div> 
                    <div className = 'section1' >
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
                    <div className='barrita'></div>
                    <CardsCategories classname="cardsCategorie" categorie = {
                        categories.map(categorie => {
                            return ( 
                            <span className = 'spanCards'
                                id = { categorie }
                                onClick = { getCategories } > { categorie } 
                            </span>

                            )
                        })
                    }
                    /> 
                    </DivCard>
                )
            })
        } </div>
    )
}

export default CardsContainer