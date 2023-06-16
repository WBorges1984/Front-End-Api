import React, { useState,useEffect } from "react";
import './carrinho.css';
import Globais from "../Globais";


function Carrinho({showCar}){
    const [fechado, setFechado] = useState('');
 
    
    useEffect(()=>{
        if (fechado==='S') {
            Globais.Carrinho=true;
            
        }else{
            Globais.Carrinho=false;
          
        } 
    },[])    


    return(
    <div className="carrinho">
        <div className="">
            <h1 className="titulo">Carrinho<br /> de compras</h1>
            <input className="btn-close" type="button"  value="X" onClick={()=>showCar('noShow')}/>
        </div>
    <div className="itemCarrinho">
        <div>
        <img src='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp' className="img-carrinho" alt="..." />
        </div>
        <div>
        <p className="texto-item">Descrição do produto um pouco maior</p>
        </div>
        <div className="qtd col-3">
            Qtd
            <br/>
            <div className="divMenos">
            <input className="btnMenos" type="button" value="-" /></div>
            <div className="divQtd">
            <input className="quatidade" type="text" name="" id="" /></div>
            <div className="divMais">
            <input className="btnMais" type="button" value="+" /></div>
        </div>
        <div className="preco">
            <label htmlFor="">R$399</label>
        </div>
    </div>
    </div>
    )
    
}export default Carrinho;