import { Component } from "react";

class create_Portal extends Component {
    constructor(props) {
        super(props);
    
        this.state={
            message:''
        }
    
    }
    showPortal=()=>{
        this.setState({
            message:'the button was clicked!!'
        })
    }

    render() {
        return(
            
                <div>
                <button onClick={this.showPortal} >show portal</button>
                </div>
            
        )
        
    }
}

export default create_Portal;