import React, {useEffect, useState} from "react";
import Card from "../Card/card";
import './body.css'
import {FaShoppingCart} from 'react-icons/fa';
import Globais from "../Globais";

function Body({props,showCar}) {
const [list, setList] = useState([]);
const [carrinho, setCarrinho] = useState(0);

useEffect(() => {
  
    //console.log(localStorage)
    fetch('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
    .then(response => response.json())
    .then(data => setList(data.products))

        
  },[]);

 



const addItem = (e) =>{
    let item = carrinho;
    setCarrinho(item + 1)


}

    return(


     <div> 
        <div className="cards">
        <div>
            <div className="btn-div">
                <input  className="btn-carrinho"  type="button"
                name='btnCar' value={carrinho} />  
                
                </div>

                <div className="icons">
                    <FaShoppingCart color="black"/>
            </div>

        </div>

            <div>
            {list.map(list =>{
                let idProd = '';
                return(
                    <div className="divPrincipal">
                        <div>   
                        <li className="li-cards" key={list.id}>
                        
                            <Card id={list.id} nome={list.name} preco={list.price} details={list.description} src={list.photo}/> 
                        
                        </li>
                        </div>
                        <div className="divButton">
                        <input className="btn-comprar" type="button" id={list.id}
                                value="Comprar" onClick={(e)=>addItem(e.target.id)}/>
                                </div>
                    
                    </div> 
                )
            })}
            </div>
        </div>
    </div>        

    );


};



export default Body;