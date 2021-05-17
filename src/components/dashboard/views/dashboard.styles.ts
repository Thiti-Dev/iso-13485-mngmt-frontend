import styled from '@emotion/styled'
import bg_image from '../../../assets/main_background.jpg'

export const BgContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: url(${bg_image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const DashboardMainContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    opacity: 1;
    padding: 0px 150px 0px 150px;

    //background-color: green;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`

///////// MenuLeft /////////
export const MenuLeft = styled.div`
    width: 330px;
    height: 100vh;
    //background: rgba(196, 196, 196, 0.5);
    padding-top: 150px;
`
export const MenuDivInner =  styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
    width: 100%;
    height: 100%;
    //background-color: gray;
`
export const MenuDivButton =  styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 50px;
    border-radius: 10px;
    //background-color: green;
    margin-bottom: 20px;
    &:hover{
        cursor: pointer;
        user-select: none;
    }
`

export const HomeIcon = styled.div`
    border: 1px solid #555;
    width: 35px;
    height: 35px;
    background-image: url('./assets/home_outline.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    //z-index: 1002;
`
export const MenuButtonText = styled.p`
    width: 50%;
    margin-top: 24px;
    font-family: 'Kanit', sans-serif;
    font-style: normal;
    font-size: 25px;
    color: #454545;
    //border: 1px solid #555;
`
////////////////////////////
export const MidBody = styled.div`
    width: 920px;
    height: 100vh;
    background-color: rgba(97, 208, 255, 0.2);
`

export const NotificationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
    padding: 110px 10px 10px;

    background: white;
    
    width: 440px;
    height: 100vh;
    overflow-y: auto;
`

export const Notih1 = styled.h1`
    width: 100%;
    font-family: 'Kanit', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    
    margin-bottom: 20px;

    text-align: center;
    color: grey;
    //border: 1px solid black;
    &:hover{
        cursor: default;
        user-select: none;
    }
`

export const NotificationListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    overflow-y: auto;

    
    /* background-color: blue;
    border: 1px solid white; */

    ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    }
`

export const DivBox = styled.div`
    padding: 10px 10px 10px 15px;
    
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start; */
    width: 100%;
    font-family: 'Kanit', sans-serif;
    font-style: normal;
    margin-bottom: 10px;

    //text-align: center;
    color: white;
    border-radius: 20px;
    //border: 1px solid #454545;
    &:hover{
        cursor: pointer;
        background-color: gray;
    }
`

export const DateP = styled.p`
    font-size: 12px;
    color: #4f5a69;
`
export const TitleP = styled.h4`
    font-size: 20px;
    color: #454545;
`
export const DetailP = styled.p`
    font-size: 15px;
    color: #454545;
    
`
