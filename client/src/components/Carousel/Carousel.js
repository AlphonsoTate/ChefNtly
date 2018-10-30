import React from "react";
import { Carousel } from "react-materialize";
import "./carousel.css";

// export default () => (
// <Carousel options={{ fullWidth: true }} images={[
//   '/Users/alphonsotate/Desktop/Classwork/ChefNtly/client/src/images/Chefinitly.jpg',
//   '/Users/alphonsotate/Desktop/Classwork/ChefNtly/client/src/images/chef.png',
//   '/Users/alphonsotate/Desktop/Classwork/ChefNtly/client/src/images/IMG_0295.PNG',
//   'https://lorempixel.com/800/400/food/4',
//   'https://lorempixel.com/800/400/food/5'
// ]} />

// )

export default () => (
  <Carousel
    className="con"
    fixedItem={<button className="btn orange">SIGN UP</button>}
    options={{ fullWidth: true }}
    images={["https://i.postimg.cc/wM1Zrb2M/Chef-background.png"]}
  >
    <div className="container">
      <h2 className="white-text center-align">Chicagos Most Talented Tastes</h2>
      <h2 className="white-text center-align">This is your first panel</h2>
    </div>
  </Carousel>
);
