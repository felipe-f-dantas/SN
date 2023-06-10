import React, { useEffect,useState } from 'react';
import * as Style from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/Vector-1.png'
import {Link} from 'react-router-dom'
import api from '../../services/api'
import isConected from '../../utils/isConected';

function Header({clickNotification}) {

    const [lateCount, setLateCount] = useState();


    async function lateVerify(){
        await api.get(`/task/filter/late/${isConected}`)
        .then(response => {
          setLateCount(response.data.length)
        })
      }

      useEffect(()=>{
        lateVerify();

      })

      async function Logout() {
        localStorage.removeItem('@nemo/macaddress')
        window.location.reload();
      }


    return(
        <Style.Container>
        <Style.Leftside>
            <img src={logo} alt="logo"/>
        </Style.Leftside>
        <Style.Rightside>
            <Link to="/home">INICIO</Link>
            <Link to="/task">NOVA TAREFA</Link>
            { !isConected ?
            <Link to="/qrcode">SINCRONIZAR CELULAR</Link> 
            :
            <button type="button" onClick={Logout}>SAIR</button>}
            
            {
                lateCount &&
                <>
                <button onClick={clickNotification} id="notification">
                    <img src={bell} alt="notificacao"/>
                    <span>{lateCount}</span></button>
                </>
            }
        </Style.Rightside>
    </Style.Container>
    ) 
}

export default Header;