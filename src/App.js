import React, { Component} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomNavbar from "./components/customNavbar/customNavbar.js";
import logo from "./images/logo.png";
import "./styles/App.scss"

class App extends Component{
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
				<div className="landing-grid">
					<div>
						<img 
							src={logo} 
							alt="Louis Alemar Logo"
							className="logo"
						/>

						<div className="banner-text">
							<h1>Front-End Developer</h1>
							<hr />
							<p>Wordpress | HTML/CSS | JavaScript | PHP | React | NodeJS | MySQL</p>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default App;