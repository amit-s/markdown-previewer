import React from 'react';
import MarkdownInput from './MarkdownInput.jsx';
import marked from 'marked';

const initialData = `Heading
=======
Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:
  * apples
  * oranges
  * pears

Numbered list:
  1. apples
  2. oranges
  3. pears

The rain---not the reign---in Spain.`


export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			inputVal : initialData
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.setState({
			inputVal: e.target.value
		});
	}

	render(){
		return(
			<div id="container">
				<MarkdownInput value={this.state.inputVal} onChangeHandler={this.handleChange} />
				<div id="output" dangerouslySetInnerHTML={{__html: marked(this.state.inputVal)}}></div>
			</div>
			);
	}
}