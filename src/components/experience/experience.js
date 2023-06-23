import React, { Component } from 'react';

class Experience extends Component {
	render() {
		return(
			<div>
				<div col={4}>
					<p>{this.props.startYear} -  {this.props.endYear}</p>
				</div>
				<div col={8}>
					<h4 style={{ marginTop: '0rem' }}>{this.props.jobName}</h4>
					<h6>{this.props.jobTitle}</h6>
					<p><em>{this.props.jobDescription}</em></p>
					<ul>
						{this.props.bullets.map((value, index) =>
							<li key={index}>{value}</li>
						)}
					</ul>
				</div>
			</div>
		)
	}
}

export default Experience;