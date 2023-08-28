import React, { Component} from 'react';
import lifecycleB from './LifecycleB';

 class LifecyckeA extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'unik'
        }
        console.log('lifecycleA constructor  ')
    }
    static getDerivedStateFromProps(props,state){
        console.log('getderivedStateFromProps')
        return null
    }
    shouldComponentUpdate(){
        console.log('lifecycleA should componentsUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleA Snapshot method before uptdatae')
    }
    componentDidUpdate(){
        console.log('lifecycleA component didupdate')
    }
    componentDidMount(){
        console.log('lifecycleA component did mount')
    }
    render() { 
        console.log('lifecycleA constructor')
        return (
            <div>
                lifecycleA
               <div><lifecycleB /></div> 
            </div>

          );
    }
}
 
export default LifecyckeA