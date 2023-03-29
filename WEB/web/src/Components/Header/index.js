import React from 'react';
import * as Style from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/Vector-1.png'
import {Link} from 'react-router-dom'

function Header({lateCount,clickNotification}) {
    return(
        <Style.Container>
        <Style.Leftside>
            <img src={logo} alt="logo"/>
        </Style.Leftside>
        <Style.Rightside>
            <Link to="/">INICIO</Link>
            <Link to="/task">NOVA TAREFA</Link>
            <Link to="#">SINCRONIZAR CELULAR</Link>
            <button onClick={clickNotification} id="notification"><img src={bell} alt="notificacao"/><span>{lateCount}</span></button>
        </Style.Rightside>
    </Style.Container>
    ) 
}

export default Header;