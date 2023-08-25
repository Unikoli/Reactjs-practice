
import react from 'react'

class hello extends react.Component {

    constructor(){
        super();
        this.state={
            name:'olee',
            age:23,
            gender:'male'
        }
    }
    updateState(){
        this.setState={
            name:'reecha',
            age:this.state.age

        }
    }
    render(){
        return(
            <div>
            <h1>hello unqiue {this.state.name}</h1>
            <h1> {this.state.age}</h1>
            <button onClick={()=>{this.updateState()}}></button>

            </div>
        )
    }
}
export default hello