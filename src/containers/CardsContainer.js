import React, { useState, useEffect } from 'react'
import { url } from './../helpers/url'
import axios from 'axios'
import Cards from './../components/Cards'
import CardsCategories from './../components/CardsCategories'
import { DivCard } from './../styled/Card'

const CardsContainer = () => {
    const [data, setData] = useState([])
    const [dataCategories, setCategories] = useState([])

    const getData = () => {
        axios.get(url)
            .then(resp => {
                setData(resp.data)
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const getCategories = (({ target }) => {
        console.log("hola nena");
        if (dataCategories.length === 0) {
            setCategories([target.id])
        }
        else {
            for (let i = 0; i >= dataCategories.length; i++) {
                if (dataCategories[i] === target.id) {
                    const dataFilter = dataCategories.filter(elem => {
                        return elem !== target.id
                    })
                    if (dataFilter.length === 0) {
                        setCategories([])
                    }
                    else {
                        setCategories(dataFilter)
                    }
                    break;
                }
                else {
                    setCategories([
                        ...dataCategories,
                        target.id
                    ])

                }
            }
        }
        console.log(dataCategories);        
    })


    return (
        <div>
            {
                data.map(({ id, url, RangeName, name, tickets, timeSigning, time, countryJob, categories, newSection }) => {
                    return (
                        <DivCard key={id}>
                            <div className={newSection ? 'newSection' : 'newSectionFalse'}>
                            </div>
                            <div className='section1'>

                                <img src={url} alt="user" />
                                <Cards
                                    name={name}
                                    rangeName={RangeName}
                                    timeSig={timeSigning}
                                    time={time}
                                    countryJob={countryJob}
                                    tickets={tickets.map(feature => {
                                        return (
                                            <span className={`feature ${feature === "NEW!" ? 'new' : 'featured'}`}>{feature}</span>
                                        )
                                    })}
                                />
                            </div>
                            <CardsCategories categorie={categories.map(categorie => {
                                return (
                                    <span className='spanCards' id={categorie} onClick={getCategories}>{categorie}</span>
                                )
                            })} />
                        </DivCard>
                    )
                })
            }
        </div>
    )
}

export default CardsContainer