import React, { Component} from 'react';

 class LifecycleB extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'unik'
        }
        console.log('lifecycleB constructor  ')
    }
    static getDerivedStateFromProps(props,state){
        console.log('getderivedStateFromProps')
        return null
    }
    shouldComponentUpdate(){
        console.log('lifecycleB should componentsUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleB Snapshot method before uptdatae')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleB component didupdate')
    }
    componentDidMount(){
        console.log('lifecycleB component did mount')
    }
    changestate=()=>{
        this.setState({
            name:'code evolution'
        })
    }
    render() { 
        console.log('lifecycleB constructor')
        return (
            <div>
                lifecycleB
                <button onClick={this.changestate}> CHANGES STATE</button>
            </div>

          );
    }
}
 
export default LifecycleB