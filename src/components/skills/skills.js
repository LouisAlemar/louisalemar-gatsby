import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Skills extends Component {
	render() {
		return(
			<div>
				<div col={12}>
					<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}><label>{this.props.skill}</label> <ProgressBar className="" now={this.props.progress} label={`${this.props.progress}%`}/> </div>
				</div>
			</div>
		)
	}
}

export default Skills;