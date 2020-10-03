import React from 'react';
// import './style.css';


class Surya extends React.Component{
	constructor(){
		super()
		this.state={
			count:0
		}
	}
	changeState(){
		this.setState({
			count:this.state.count+1
		})
	}
	render(){
		return(
			<div>
			<h2>{this.state.count}</h2>
			<button onClick={()=>this.changeState()}>Click Here</button>

			</div>
		);
	}
}

export default Surya;
