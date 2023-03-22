import React from 'react';
import * as Style from './styles';
import iconDefault from '../../assets/Vector-7.png'

function TaskCard({type, title, date, hour}) {
    return(
        <Style.Container>
            <Style.TopCard>
                <img src={iconDefault} alt="Icone da tarefa"/>
                <h3>Titulo da Tarefa</h3>
            </Style.TopCard>

            <Style.BottomCard>
                <strong>18/01/1995</strong>
                <span>10:00</span>

            </Style.BottomCard>
       </Style.Container>
    ) 
}

export default TaskCard;