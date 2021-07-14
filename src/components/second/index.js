import React from 'react';
import PropTypes, { number } from 'prop-types';

class Second extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            valueOne:''
        }
      

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    };


    handleChange(e){
        if (e.target.id==="zero") 
        this.setState({
            value: e.target.value*0.5}
        );

        if (e.target.id==="one") 
        this.setState({
            valueOne: e.target.value*0.5}
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
            <input id="one" value={this.state.valueOne} onChange={this.handleChange}/>
            <div>{this.state.valueOne} </div>
        

            <input type="submit" value="send" onClick={this.handleSubmit} /> 
        </form>
    );
}
}
Second.propTypes = {
    valueF: PropTypes.number,
    valueFTwo: PropTypes.number,
}
export default Second;
