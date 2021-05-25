import React from 'react'
import { StarContainer, StarFilled, StarUnFilled } from './Ratingstar.styles';

interface Props {
    starcount?: number
}

const Ratingstar:React.FC<Props> = ({starcount=1}) => {
    let rendered_star = []
    for(let x=0; x < 5 ; x++){
        if(x<starcount)rendered_star.push(<StarFilled/>)
        else rendered_star.push(<StarUnFilled/>)
    }
    return (
       <>
            <StarContainer> 
                {rendered_star}
            </StarContainer>
       </>
    )
}
export default Ratingstar;
