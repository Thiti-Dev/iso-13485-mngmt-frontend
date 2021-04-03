import styled from '@emotion/styled'
import { Button } from 'antd';
import bg_image from '../../../../assets/main_background.jpg'
///// Background /////
export const BgContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: url(${bg_image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
`
export const SaleActivityText = styled.h1`
    /* SaleActivityText */
    
    width: 400px;
    margin: 60px 0px 0px 0px;
    //height: 57px;

    font-family: 'Kanit', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 24px;
    /* or 50% */

    color: #444444;
    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: 40px;

`

export const SalesContainer = styled.div`
    /* BodyContainer */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 150px 0px 150px;

    position: absolute;
    width: 100%;
    height: 100vh;
`
////////////////// Table Zone ////////////////

export const Table = styled.table`
    height: 600px;
    //border: 1px solid black; 
`

export const TheadHeader = styled.thead`
    text-align: left; 
`
export const TrHeader = styled.tr`
    display: flex;
    flex-direction: row;
    //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`
export const ThHeader = styled.th<{width: number}>`
    width: ${props=>props.width}px;
    height: 50px;

    background-color: #F2C94C; 
    
    font-family: 'Kanit', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 45px;

    padding-left: 15px;
    text-align: left;
    color: #454545;
    //border: 1px solid black;
`
export const ThHeaderUniq = styled.th<{width: number}>`
    width: ${props=>props.width}px;
    height: 50px;

    background-color: #F2C94C; 
    
    font-family: 'Kanit', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 45px;

    text-align: center;
    color: #454545;
    //border: 1px solid black;
`

///// Table Content //// 

export const BodyWrapper = styled.div`
    //width:100%;
    height: 600px;
    //table-layout: fixed;
    //border: 1px solid black;
    overflow-y: auto;

    ::-webkit-scrollbar {
    width: 13px;
    height: 13px;
    }
    ::-webkit-scrollbar-thumb {
    background: darkgray;
    border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:active{
    background: gray;
    }
    ::-webkit-scrollbar-track{
    background: #ffffff;
    border-radius: 10px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
    }
    
    
`
export const TbodyContent = styled.tbody`
    height: 100%;
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    //background-color: #F2C94C;
    //color: #F2C94C;
    box-shadow: #454545 1px;

    /* &tr:nth-col(odd) {
        background-color: whitesmoke;
    } */

`

export const TrContent = styled.tr`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(220, 220, 200, 1);
`

export const TdContent = styled.td`
    height: 40px;
    background-color: wheat; 

    font-family: 'Kanit', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 35px;

    padding-left: 15px;
    text-align: left;
    color: black;
    //border: 1px solid black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`

export const TdContentUniq = styled.td`
    height: 40px;
    background-color: wheat; 

    font-family: 'Kanit', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 35px;

    //padding-left: 15px;
    text-align: center;
    color: black;
    //border: 1px solid black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`