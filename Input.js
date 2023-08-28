import React, { Component } from 'react';
class Input extends Component {
    constructor(props) {
        this.inputrefs=React.createRef()
        super(props);
    }
    focusInput(){
        this.inputrefs.current.focus()
    }
   
    render() {
        return ( 
            <div>
                <input type='text' refs={this.inputrefs}/>

            </div>
         );
    }
}
 
export default Input;