import React, { component } from "react";

export default class  header extends component {
    constructor(props){
        super(props);
            this.state={
                name:'uneek',
                message:'hello buddy'
            }
    }
    clickHandler(){
        this.setState={
            message:'good bye'
        }
    }
    render() {
        return (
            <div>
                <h1> { this.state.message}</h1>
                <button onClick={()=>this.clickHandler()}></button>

            </div>
        )
    }
}
