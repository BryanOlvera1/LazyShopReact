import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/UI/Navbar";
import Products from './Components/UI/Products';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';
import Products1 from './Components/UI/products1';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path="/Products1" component={Products1} />
        <Route exact path="/" component={Home} />
        <Route path="/Products" component={Products} />
        <Route path="/Home" component={Home} />
        <Route path="/ContactUs" component={ContactUs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
