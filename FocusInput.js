import React, { Component } from 'react';
import Input from './Input';
class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.FocusInput()
    }
   
    render() { 
        return ( 
            <div>
                <input ref= {this.componentRef}/>
                <button oncClick={this.clickHandler}>foucus input</button>
            </div>
         );
    }
}
 
export default FocusInput;