import React from 'react';
import './index.css';
import { BrowserRouter as  Router, Route } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import Admin from './views/Admin'
import Footer from './components/FooterComponent/Footer'


// import PrivateRoute from "./privateRoute/PrivateRoute"


function App() {
	return (
        <div>
    <Router>
        {/* <PrivateRoute exact path="/Admin" component ={Admin}/> */}
        <Route exact path="/Login" component ={Login}/>
        <Route exact path="/" component ={Home}/>
        {/* Borrar esta ruta */}
        <Route exact path="/Admin" component ={Admin}/>
        
    </Router>
    <Footer/>
    </div>


	);
}

export default App;
