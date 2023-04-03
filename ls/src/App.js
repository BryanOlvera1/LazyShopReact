import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/UI/Navbar";
import Products from './Components/UI/Products';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/Products" component={Products} />
        <Route path="/Home" component={Home} />
        <Route path="/ContactUs" component={ContactUs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
