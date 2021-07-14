import React from 'react';
import './first.css';

class First extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            valueOne:'',
            valueTwo: ''
        }
        
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    };


    handleChange(e){
        if (e.target.id==="zero") 
        this.setState({
            value: e.target.value,}
        );

        if (e.target.id==="one") 
        this.setState({
            valueOne: e.target.value,}
        );

        if (e.target.id==="two") 
        this.setState({
            valueTwo: e.target.value,}
        );
          }

        
    

    handleSubmit(e){
        e.preventDefault();
    }

render() {
    return(
        <form className="form" onSubmit={this.handleSubmit}>
            <input id="zero" value={this.state.value} onChange={this.handleChange} />
            <div>{this.state.value} </div>
            <div> {this.state.id}</div>
            <input id="one" value={this.state.valueOne} onChange={this.handleChange}/>
            <div>{this.state.valueOne} </div>
            <input id="two" value={this.state.valueTwo} onChange={this.handleChange} />
            <div>{this.state.valueTwo} </div>

            <input type="submit" value="send" onClick={this.handleSubmit} /> 
        </form>
    );
}
}

export default First;
