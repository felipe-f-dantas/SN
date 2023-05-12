import React,{useMemo}from 'react';
import {format} from 'date-fns';
import * as Style from './styles';
import iconDefault from '../../assets/Vector-7.png'
import typeIcons from '../../utils/typeIcons';

function TaskCard({type, title, when, done}) {
    const date = useMemo (()=> format (new Date(when),'dd/MM/yyyy'));
    const hour = useMemo (()=> format (new Date(when),'HH:mm'));

    return(
        <Style.Container done={done}>
            <Style.TopCard>
                <img src={typeIcons[type]} alt="Icone da tarefa"/>
                <h3>{title}</h3>
            </Style.TopCard>
            <Style.BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>

            </Style.BottomCard>
       </Style.Container>
    ) 
}

export default TaskCard;