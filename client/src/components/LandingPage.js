import React from "react";
import HomeCarousel from "./HomeCarousel";
import "../style/landingPage.css"
import AllProducts from "./AllProducts";
const LandingPage = () => {
  return (
    <div>
      <HomeCarousel/>
      <div  className="gBloc"  style={{textAlign: "center", padding:"50px"
}}>
        <h1> Comment ça marche</h1>
        <div className="pbloc">
        <div className="bloc">
          <img src="https://food.jumia.com.tn/images/how-it-works-2.svg?v=1596116892" alt="chooseproduct" />
          <h3>Choisissez votre produits</h3>
          <p>Parcourir les enseignes qui livrent près de chez vous</p>
        </div>
        <div >
        <img src="https://cdn1.vectorstock.com/i/thumb-large/51/45/online-order-steps-icon-with-laptop-vector-35625145.jpg" alt= "command" style={{border:"2ps solid red",height:"180px", width:"180px"}}/>
          <h3>Passer votre commande</h3>
          <p>Suivre les étapes pour valider votre commande</p>
        </div>
        <div>
        <img src="https://food.jumia.com.tn/images/how-it-works-3.svg?v=1596116892" alt="delivered"/>
          <h3>Recevez-le à votre porte</h3>
          <p>Votre commande vous sera livrée en un rien de temps</p>
        </div>
        </div>
     
      </div> 
    
      <AllProducts/>
         
    
    </div>
  );
};

export default LandingPage;
