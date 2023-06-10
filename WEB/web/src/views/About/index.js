import React, {useState, useEffect } from "react";
import * as Style from './styles';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import download from "../../assets/teste.png"

function About() {


  return  (
    <Style.Container>
        <Header/>
         <Style.Content>
          <Style.Leftside>
          <img src={download} alt="download"/>
          </Style.Leftside>
          <Style.Rightside>
          <h1>BAIXE O APP</h1>
          <h2>CLICANDO AQUI</h2>
          </Style.Rightside>
        </Style.Content>
        <Footer/>
    </Style.Container>
       


  )
}

export default About;
