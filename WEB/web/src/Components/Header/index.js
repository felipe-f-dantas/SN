import React from 'react';
import * as Style from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/Vector-1.png'

function Header({lateCount,clickNotification}) {
    return(
        <Style.Container>
        <Style.Leftside>
            <img src={logo} alt="logo"/>
        </Style.Leftside>
        <Style.Rightside>
            <a href="#">INICIO</a>
            <a href="#">NOVA TAREFA</a>
            <a href="#">SINCRONIZAR CELULAR</a>
            <button onClick={clickNotification} id="notification"><img src={bell} alt="notificacao"/><span>{lateCount}</span></button>
        </Style.Rightside>
    </Style.Container>
    ) 
}

export default Header;