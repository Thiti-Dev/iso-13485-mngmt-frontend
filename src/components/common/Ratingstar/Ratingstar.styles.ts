import styled from '@emotion/styled'
import star_filled from './assets/star_filled.png'
import star_unfilled from './assets/star_unfilled.png'


export const StarContainer = styled.div`
    width: 200px;
    //border: 1px solid #616163;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
`

export const StarFilled = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 2px;
    background-image: url(${star_filled});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`
export const StarUnFilled = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 2px;
    background-image: url(${star_unfilled});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`