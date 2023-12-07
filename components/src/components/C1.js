import { Component } from "react";
class C1 extends Component{
    constructor(props){
        super();
        this.state = {
            name: "Killer",
            power:false

        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
       document.getElementById("demo").innerHTML=this.state.name;
    }
    handleClick2 = () => {
        this.setState({
            power: !this.state.power
        })
    }

    render(){
        return(
            <div>
                <h1>My name is {this.state.name}</h1>
                <p id="demo"></p>
                <button onClick={this.handleClick}>Click</button>
                <button onClick={this.handleClick2}
                >Switch-{this.state.power?"ON":"OFF"}</button>
            </div>
        );
       
    }
}
export default C1;