import React, { Component } from 'react';
// import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
	render(){
		return(
			<div style={{width: '100%', margin: 'auto'}}>
				<div className="landing-grid">
					<div col={12}>
						<img 
							src={'../images/logo.png'} 
							alt="Louis Alemar Logo"
							className="logo"
						/>

						<div className="banner-text">
							<h1>Front-End Engineer</h1>

							<hr />

							<p>HTML/CSS | JavaScript | PHP | React | NodeJS | MySQL</p>

							<div className="social-links">
								{/* GitHub */}
								<a href="https://github.com/LouisAlemar" target="_blank">
									<i className="fab fa-github-square"></i>
								</a>

								{/* LinkedIn */}
								<a href="https://www.linkedin.com/in/louisalemar/" target="_blank">
									<i className="fab fa-linkedin"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Landing;