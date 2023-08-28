import React, { Component } from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';
import MemoComp from './MemoComp';
class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'unique'
        }
    }
    compponentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'unique'
            })
        },2000)
    }

    render() { 
        console.log('**********parent component******')
        return (  
            <div>
                <h1>Parent component</h1>
                {/* <RegularComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name}/>
            </div>
        );
    }
}
 
export default ParentComp;