import React, {useEffect, useState} from "react";
import Header from "../Header/header";
import Body from "../Body/body";
import Footer from "../Footer/footer";
import Carrinho from "../Carrinho/carrinho";
import TotItem from "../../TotalItem/totItem";
import Globais from "../Globais";


function Home(){


    const [car, setCar] = useState('noshow');

    const showCar = (action) =>{
        
        if(action === 'show'){
            setCar('show')
        }

        if(action === 'noShow'){
            setCar('noShow');
        }
        console.log(action)
    }

    

 


    return(
        <div className="conteudo-site">
            
            <div className="div-header">
            <Header />
            <br />
            {car === 'show' && <Carrinho showCar={showCar} />  }
            <Body showCar={showCar} />
            
            </div>
            <Footer />

            

        </div>
        


    )    
}

export default Home;