
import React, { Component } from 'react';

class RegularComp extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        console.log('regular component')
        return ( 
            <div>
               <h1> Regular component   {this.props.name}</h1>
             
                
            </div>
         );
    }
    
}
 
export default RegularComp;