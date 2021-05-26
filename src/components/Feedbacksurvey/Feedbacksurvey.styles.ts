import styled from '@emotion/styled'
import { Button } from 'antd';
import comment_image from './assets/comment_image.svg'

export const BgContainer = styled.div`
    width: 100vw;
    height: 100vh;
    //border: 1px solid red
    background-color: rgba(141, 153, 174, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    color: #616161;
`

export const FSContainer = styled.div`
    width: 40%;
    height: 80%;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
export const PrimaLogo = styled.div`
    width: 170px;
    height: 80px;
    background-image: url('https://www.primalasertherapy.com/wp-content/uploads/2019/10/PLT-Gold-Black.png ');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1001;

    margin-top: 20px;
`
export const CSSText = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 7%;
    background-color: goldenrod;

    text-shadow: 1px 1px #454545;
    font-size: 24px;
    font-weight: 600;
    color: white;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
`
export const GiveScoreContainer = styled.div`
    width: 100%;
    height: 50%;
    //border: 1px solid red;

    display: flex;
    flex-direction: row;
`
export const GiveScoreText = styled.div`
    width: 50%;
    height: 100%;
    //border: 1px solid brown;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CommentImage = styled.div`
    width: 70%;
    height: 80%;
    background-image: url(${comment_image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    //border: 1px solid violet;
`
export const RateContainer = styled.div`
    width: 50%;
    height: 100%;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const RateText = styled.div`
    margin-top: 20px;
    width: 100%;
    //border: 1px solid brown;
    
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TextP = styled.p`
    font-size: 16px;
    color: 454545;
`
export const RateCommentBox = styled.input`
    width: 90%;
    height: 8%;
    border: 1px solid #717171;
    border-radius: 15px;
    padding: 10px 10px;
`
export const RateCommieBtn = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    width: 40%;
    height: 6%;
    border: none;
    background-color: goldenrod;
    color: white;
    box-shadow: none;
    border-radius: 10px;
    //box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.05);
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