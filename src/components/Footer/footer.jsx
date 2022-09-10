import React from "react";
import './footer.css';
import foto from '../../assets/drogavista.jpg';

function Drogaria(){
  return(
    <div className="tela"> 
      <h1>Sobre Nós </h1>
      <img src={foto} className = "foto"/>
      <h2 className="contato">Fale Conosco: <br />
        Telefone: (11) 4485-6685
       <br /> E-mail: farmavista@hotmail.com
        <br />
        <a href="https://www.extrafarma.com.br/quem-somos-historico" target="_blank">Nossa História</a>
      </h2>
       
    </div>
    
  )
};
export default Drogaria;