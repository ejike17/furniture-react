import React from 'react';
import Catalog from './Catalog';
import Category from './Category';
import Featured from './Featured';
import Featured_Deal from './Featured_Deal';
import Feedback from './Feedback';
import LatestNews from './LatestNews';
import NewProducts from './NewProducts';
import Newsletter from './Newsletter';

function Main() {
    return <div>        
        <NewProducts />
        <Category />
        <Featured />
        <Featured_Deal />
        <Catalog />
        <LatestNews />    
        <Feedback />
        <Newsletter />
        
  </div>;
}

export default Main;
