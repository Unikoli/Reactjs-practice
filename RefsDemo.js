import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef=React.createRef()

    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickhandler=()=>{
        alert(this.inputRef.current.value)
    }
    
    render() { 
        return ( 
            <div>
            <h1>heloo brother</h1>
            <input type='text'  ref={this.inputRef}></input>
            <button onClick={this.clickhandler}>click</button>
            </div>
         );
    }
}
 
export default RefsDemo;