import React, { useEffect, useState } from "react";
import './card.css';
import {FaShoppingBasket, FaShoppingCart} from 'react-icons/fa';
import Globais from "../Globais";
import TotItem from "../../TotalItem/totItem";



function Card(props,{ShowAtualiza, atuItens}) {

    const [produtoCart, setProdutoCart] = useState([{}]);
    const [qtdItem,setQtdItem] = useState(Globais.Item.length);
    const [verificaItem, setVerificaItem] = useState([{}]);
    
    
    



    useEffect(()=>{
        let qntItens = Globais.Item.length - 1;
    
        setQtdItem(qntItens);
    
    
    },[Globais.Item]);


    function Item(e) {
        
       
        const copyItem = [...Globais.Item]

        let Prod =  '';
        Prod = copyItem.map((res)=> res.IdItem);
       
        console.log(Prod);
          
        if(Prod.includes(e)){
    
       
        Globais.Item.push({
            IdItem: props.id,
            DescItem: props.nome,
            ImgItem: props.src,
            QtdItem: 1,
            ValItem: props.preco})   
            
            Globais.QtdProdutos = Globais.QtdProdutos + 1;
            
        }else{
            Globais.Item.push({
                IdItem: props.id,
                DescItem: props.nome,
                ImgItem: props.src,
                QtdItem: 1,
                ValItem: props.preco})

                Globais.QtdProdutos = Globais.QtdProdutos + 1;
                
            
        }

        console.log(Globais.Item)
        console.log(Globais.QtdProdutos + ' - quantidade de itens no carrinho')
          
    }

    return(

        <div className="div-principal border">
          
                <img src={props.src} className="card-img-top" alt="..." />
            <div className="txt-price">                
                <p className="card-text">{props.nome}</p>
                <div className="price"><span><a>R$</a>{props.preco}</span></div>
            </div>
         
                <p className="card-subtext">{props.details}</p>
              
                        
        </div>
       



    );
    
}

export default Card;