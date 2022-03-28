import styled from 'styled-components'

const DivCards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .flex{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
    .feature{
        padding: 5px 10px 5px 10px;
        border-radius: 20px;
        color: white;
        font-weight: bold;
    }
    .section1{
        justify-content: start;
    }
    .section2{
        justify-content: space-around;
        color: hsl(180, 8%, 52%);
    }
    .rangeName{
        font-size: 20px;
    }
    .name{
        color: hsl(180, 29%, 50%);
    }
    .featured{
        background-color: hsl(180, 14%, 20%);
    }

    .new{
        background-color: hsl(180, 29%, 50%);
    }
    
`
const SpanCards = styled.span`
  font-weight: bold;
    
`

export { DivCards, SpanCards }