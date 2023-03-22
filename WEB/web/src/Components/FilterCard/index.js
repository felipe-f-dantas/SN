import React from 'react';
import * as Style from './styles';
import filter from '../../assets/Vector-16.png';

function FilterCard({title,actived}) {
    return(
        <Style.Container actived={actived}>
           <img src={filter} alt="Filtro"/>
           <span>{title}</span>

       </Style.Container>
    ) 
}

export default FilterCard;