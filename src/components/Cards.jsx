import React from 'react'
import {DivCards, SpanCards} from './../styled/Cards'

const Cards = (props) => {
  return (
    <DivCards>
        <div className='flex section1'>
            <SpanCards className="name" id="name">{props.name}</SpanCards>
            <div className="flex">
               {props.tickets}
            </div>
        </div>
        <SpanCards className='rangeName'>{props.rangeName}</SpanCards>
        <div className='flex section2'>
            <SpanCards>{props.timeSig}</SpanCards>
            <SpanCards>.</SpanCards>
            <SpanCards>{props.time}</SpanCards>
            <SpanCards>.</SpanCards>
            <SpanCards>{props.countryJob}</SpanCards>
        </div>
    </DivCards>
  )
}

export  default Cards