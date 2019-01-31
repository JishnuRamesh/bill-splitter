import React, { Component } from 'react';
import logo from './images/logo.png';



class Nav extends Component {


 render(){


    return (


        <nav className="navbar navbar-light  transparent">
            <a className="navbar-brand mx-auto " href="#" style={{fontSize:3+'em', color:"yellow"}}>
            <img className="img-fluid rounded-circle" src={logo} alt="" style={{borderStyle : "none", maxHeight:100 + "px" }}  /> </a>
        </nav>



    )

   



 }






}


export default Nav;