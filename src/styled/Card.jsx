import styled from 'styled-components'

const DivCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 2% auto 2% auto;
    padding: 3%;
    background-color: white;
    border-radius: 20px;
    box-shadow: 6px 6px 8px hsl(180, 31%, 95%);
    position: relative;
    z-index: 10;
    overflow: hidden;
    .section1{
        display: flex;
        align-items: center;
        gap: 25px;
    }
    img{
       height: 88px;
    }
    .newSection{
        width: 6px;
        height: 100%;
        background-color:hsl(180, 29%, 50%);
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 20px;
        z-index: 5;

    }
    .newSectionFalse{
        display: none;
    }
`

export {DivCard}