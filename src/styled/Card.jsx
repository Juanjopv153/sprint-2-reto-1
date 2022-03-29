import styled from 'styled-components'

const DivCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 2% auto 2% auto;
    padding: 5%;
    background-color: white;
    border-radius: 20px;
    box-shadow: 6px 6px 8px hsl(180, 31%, 95%);
    position: relative;
    z-index: 10;
    .barrita{
            margin: 4% auto 4% 0;
        }
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

    @media screen and (max-width:950px) {
        flex-direction: column;
        align-items: start;
        .barrita{
            height: 2px;
            width: 100%;
            background-color: gray;
            margin: 5% 0 5% 0;
        }
    }

    @media screen and (max-width:560px) {
        width: 90%;
        overflow: inherit;
        padding-top: 15%;
        margin: 55px auto 55px auto;


        img{
            position: absolute;
            top: -15%;
          
            z-index: 15;
        }
    }
`

export {DivCard}