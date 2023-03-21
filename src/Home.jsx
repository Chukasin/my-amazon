import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
    <div className="home__container">
        <img className="home__image"
         src="https://m.media-amazon.com/images/I/415Ev1UdWbL._SX1500_.jpg" alt='' />
       
        <div className="home__row">
        <Product id='12321341' title='The lean startup: How Constant Innovation Creates Rdically Successful Businesses Paperback' price={29.99}
         image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
         rating={5} />

        <Product id='49538094' 
        title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
         price={239.0} 
         rating={4} 
         image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81rgIlDm6wL._AC_SL1500_.jpg'/>
        </div>

        <div className="home__row">
        <Product id='4903850'
        title='Samsung LC4RG90SSUXEN 49 Curved LED Gaming Moniter'
        price={199.99}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
         />

        <Product id='23445930'
        title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
        price={98.99}
        rating={5}
        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?300x400_retinamobilex$"/>

        <Product
        title='New Apple ipad pro (12.9-inch. Wi-Fi, 128GB) - Silver (4th Generation)'
        price={598.99}
        rating={4}
        image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'/>
        </div>
       
        <div className="home__row">
        <Product id='90829332'
        title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor -Super Ultra Wide Dual WQHD 5120 x 1440'
        price={1094.98}
        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_.SX335_.jpg"/>
        </div>

    </div>
    </div>
  )
}

export default Home;