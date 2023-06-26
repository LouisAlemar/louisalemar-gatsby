import React, { Component } from 'react';

class Education extends Component {
	render() {
		return(
			<div className='education'>
				<div col={4}>
					<h6>{this.props.startYear} -  {this.props.endYear}</h6>
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