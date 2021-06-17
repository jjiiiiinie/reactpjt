import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/pages/home/Home'
import Features from './components/pages/features/Features';
import Pricing from './components/pages/pricing/Pricing';
import ProductDetail from './components/pages/productdetail/ProductDetail';
import Compare from './components/pages/compare/Compare';
import WishList from './components/pages/wishlist/WishList';
import Cart from './components/pages/cart/Cart';
import ProductList from './components/pages/product/ProductList';
import MyAccount from './components/pages/myaccount/MyAccount'

import "./assets/css/style.css";
import "./assets/css/mystyle.css";
// import "./assets/css/layout.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/icons8/css/line-awesome.min.css";
import ToTop from './utilities/ToTop';

function App()  {
  return (
    <BrowserRouter>
      <ToTop>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/features"><Features /></Route>
          <Route exact path="/pricing"><Pricing /></Route>
          <Route exact path="/productdetail/:id"><ProductDetail /></Route>
          <Route exact path="/compare"><Compare /></Route>
          <Route exact path="/wishlist"><WishList /></Route>
          <Route exact path="/cart"><Cart /></Route>
          <Route exact path="/productlist"><ProductList /></Route>
          <Route exact path="/myaccount"><MyAccount /></Route>
        </Switch>
      </ToTop>
    </BrowserRouter>
  );
};

export default App;
