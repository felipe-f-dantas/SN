import React, {useState, useEffect } from "react";
import * as Style from './styles';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import banner from "../../assets/teste.png"
import download from "../../assets/download.png"


function About() {


  return  (
    <Style.Container>
        <Header/>
         <Style.Content>
          <Style.Leftside>
          <img src={banner} alt="Banner"/>
          </Style.Leftside>
          <Style.Rightside>
          <h1>BAIXE O APP</h1>
          <img src={download} alt="download"/>
          </Style.Rightside>
        </Style.Content>
        <Footer/>
    </Style.Container>
       


  )
}

export default About;
