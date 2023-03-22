import React from 'react';
import * as Style from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/Vector-1.png'

function Header() {
    return(
        <Style.Container>
        <Style.Leftside>
            <img src={logo} alt="logo"/>
        </Style.Leftside>
        <Style.Rightside>
            <a href="#">INICIO</a>
            <a href="#">NOVA TAREFA</a>
            <a href="#">SINCRONIZAR CELULAR</a>
            <a href="#" id="notification"><img src={bell} alt="notificacao"/><span>5</span></a>
        </Style.Rightside>
    </Style.Container>
    ) 
}

export default Header;