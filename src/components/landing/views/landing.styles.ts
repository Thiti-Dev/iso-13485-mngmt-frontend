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

export const LeftTab = styled.div`
    /* Left-tab */
    position: absolute;
    width: 756px;
    height: 100%;

    background: rgba(218, 218, 218, 0.2);
`