import React, { Component } from 'react';

class Education extends Component {
	render() {
		return(
			<div>
				<div col={4}>
					<p>{this.props.startYear} -  {this.props.endYear}</p>
				</div>
				<div col={8}>
					<h4 style={{ marginTop: '0rem' }}>{this.props.schoolName}</h4>
					<p>{this.props.schoolDescription}</p>
				</div>
			</div>
		)
	}
}

export default Education;