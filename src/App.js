import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import cart from './pages/cart';
import bunny from './pages/bunny';
import rabbit from './pages/rabbit';
import eagle from './pages/eagle';
import signUp from './pages/signUp';
import shop from './pages/shop';
import checkout from './pages/checkout';
import orders from './pages/orders';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={cart} />
        <Route path="/bunny-box" component={bunny} />
        <Route path="/rabbit-box" component={rabbit} />
        <Route path="/eagle-box" component={eagle} />
        <Route path="/sign-up" component={signUp} />
        <Route path="/shop" component={shop} />
        <Route path="/checkout" component={checkout} />
        <Route path="/orders" component={orders} />
      </Switch>
    </Router>
      
  );
}

export default App;
