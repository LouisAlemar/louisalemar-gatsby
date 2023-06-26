import React, { Component } from 'react';

class Experience extends Component {
	render() {
		return(
			<div className='experience'>
				<div col={4}>
					<h6>{this.props.startYear} -  {this.props.endYear}</h6>
				</div>
				<div col={8}>
					<h4 style={{ marginTop: '0rem' }}>{this.props.jobName}</h4>
					<h5>{this.props.jobTitle}</h5>
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