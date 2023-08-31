import React, { useState } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import Globais from "../Components/Globais";



function TotItem({showCar}){

    const [atuQnt,setAtuQnt]= useState();
   
const atualizaQnt = ()=>{
    atualizaQnt = Globais.Item.length - 1;
    setAtuQnt(atualizaQnt);
    console.log("987");
}


    return(
    <div>
        <div className="btn-div">
            <input  className="btn-carrinho"  type="button" 
            name='btnCar' value={0} onClick={()=>showCar('show')}/>
            
            
            </div>

            <div className="icons">
                <FaShoppingCart color="black"/>
        </div>

    </div>


        )



}export default TotItem;