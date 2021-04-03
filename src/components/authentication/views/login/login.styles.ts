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

//// Other /////
export const LoginContainer = styled.div`
    /* LoginContainer */
    /* Auto Layout */
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    padding: 80px 280px 0px 280px;
`
export const LoginText = styled.h1`
    /* ลงชื่อเข้าใช้ */
    
    width: 400px;
    height: 57px;

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
    margin-bottom: 30px;
`
export const TextP = styled.p<{fontSize: number}>`
    /* ไอดี */
    width: 420px;
    height: 48px;

    font-family: 'Kanit', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: ${props=>props.fontSize}px;
    line-height: 24px;
    /* or 100% */

    display: flex;
    align-items: center;

    color: #707070;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 5px 10px;
`
export const InputValue = styled.input`
    /* Rectangle 1 */

    position: static;
    width: 440px;
    height: 65px;
    left: 280px;
    top: 369px;

    border: 3px solid #F2C94C;
    border-radius: 20px;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;
`
export const LoginBtn = styled(Button)`
    /* Login Button 1 */
    width: 440px;
    height: 65px;

    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 50px 0px;
    border-radius: 20px;
    
    background: #F2C94C;
    border: 3px solid #F2C94C;
    border-radius: 20px;

    font-family: 'Kanit', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: white;
    /* or 100% */
    &:hover{
        background-color: gray;
        color: white;
        border: none;
        box-shadow: none;
    }
    &:focus{
        background-color: gray;
        color: white;
        border: none;
        box-shadow: none;
    }
`
