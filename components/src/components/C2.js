import React from "react";
class C2 extends React.Component{
    constructor(props){
        super(props)
        console.log("I am constructor");

    }
    static getDerivedStateFromProps(){
        console.log("I am from ger derived State");

    }
    componentDidMount(){
        console.log("i am from didmount")
    }
    render(){
        
        
            console.log("I am render")
            return <h1>Life cycle methods</h1>
        
    
    }
}
export default C2