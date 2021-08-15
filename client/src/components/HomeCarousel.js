import React from "react";
import { Carousel } from "react-bootstrap";
const HomeCarousel = () => {
  return (
    <div className="carousel" >
      {/* <h3>Produits traditionnels: Pures, sans colorant, ni conserveteurs, ni ajout divers</h3> */}
       <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{borderRadius:"0px"}}
      src="https://www.souk-oriental.com/img/cms/epice-traditionnelle_1.jpg"
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
  <div class="container">
  <img
      className="d-block w-100"
      style={{borderRadius:"0px"}}
      src="https://mountik.com/c/63-category_default/fruits-secs-en-tunisie.jpg"
      alt="Third slide"
   
    />
     </div>
  </Carousel.Item>
  
  <Carousel.Item>
  <div class="container">
  <img
      className="d-block w-100"
      style={{borderRadius:"0px"}}
      src="https://femmesdetunisie.com/wp-content/uploads/2016/01/huile-1.jpg"
      alt="Third slide"
  
    />
    <div class="text">
        <h1>SOURCE OLIVE</h1>
        <h4>Votre huile à domicile</h4>
      </div>
</div>
    
  </Carousel.Item>
  <Carousel.Item>
  <div class="container">
  <img
      className="d-block w-100"
      style={{borderRadius:"0px"}}
      src="/images/img4.jpg"
      alt="Third slide"
   
    />
    <div class="text1">
        <h1>MIEL 100% PUR, QUAND LA NATURE S'INVITE À VOTRE TABLE</h1>
        
      </div>
     </div>
  </Carousel.Item>
  <Carousel.Item>
  <div class="container">
  <img
      className="d-block w-100"
      style={{borderRadius:"0px"}}
      src="/images/img6.jpg"
      alt="Third slide"
   
    />
    <div class="text2"> 
    <h1>Le secret de la cuisine et la santé méditéranéenne</h1>
      <h4>Les herbes aromatiques</h4>
       
        
        
      </div>
     </div>
   
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default HomeCarousel;
