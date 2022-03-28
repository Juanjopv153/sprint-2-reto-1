import styled from 'styled-components'

const DivCards = styled.div`
display: flex;
gap: 15px;
align-items: center;
justify-content: center;
.spanCards{
    background-color: hsl(180, 31%, 95%);
    padding: 5px 10px 5px 10px;
    color: hsl(180, 29%, 50%);
    cursor: pointer;
    font-weight: bold;
    transition: all 0.5s;
    &:active{
        background-color:hsl(180, 29%, 50%);
        color: hsl(180, 31%, 95%);
    }
}
`


export { DivCards }