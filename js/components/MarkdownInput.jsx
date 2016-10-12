import React from 'react';

export default class MarkdownInput extends React.Component{
	render(){
		return(
			<textarea id="input" value={this.props.value} onChange={this.props.onChangeHandler}></textarea>
			);
	}
}