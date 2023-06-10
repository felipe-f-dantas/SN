import React, {useState, } from "react";
import {Redirect} from 'react-router-dom';
import * as Style from './styles';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Qr from 'qrcode.react';


function QrCode() {

    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    async function SaveMac(){
        if(!mac){
            alert("Digite a numeracao que esta aparecendo no seu celular")
        }else{

            await localStorage.setItem('@nemo/macaddress', mac);
            setRedirect(true);
            window.location.reload();
        }
    }

        return(
            <Style.Container>
                { redirect && <Redirect to="/home"/> }
                <Header/>
                <Style.Content>
                    <h1>ESCANEI O QRCODE PELO APP</h1>
                    <p>SUAS ATIVIDADES SERAO SINCRONIZADAS COM SEU CELULAR</p>
                    <Style.QrCodeArea>
                    </Style.QrCodeArea>
                        <Qr value="getmacaddress" size={350}></Qr>
                    <Style.ValidationCode>
                        <span>Digite a numeracao que esta aparecendo no seu celular</span>
                        <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
                        <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
                    </Style.ValidationCode>

                    
                </Style.Content>
                <Footer/>
            </Style.Container>
        )
}

export default QrCode