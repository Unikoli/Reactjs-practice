
import React, {useReducer} from 'react';
const initialvalue=0
const reducer=(state,action)=>{
    switch(action){
        case'increment':
        return state+1
        case'decrement':
        return state-1
        case'reset':
        return initialvalue
        default:
            return state
    }
}
function Reducerhookcounterthree() {
    const [count,dispatch]=useReducer(reducer,initialvalue)
    const [count1,dispatch1]=useReducer(reducer,initialvalue)
    return ( 
        <div>
        <h1>
            <h1>count={count}</h1>
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
            <button onClick={()=>dispatch('reset')}>reset</button>
            </h1>
            <h1>
            <h1>count={count1}</h1>
            <button onClick={()=>dispatch1('increment')}>increment</button>
            <button onClick={()=>dispatch1('decrement')}>decrement</button>
            <button onClick={()=>dispatch1('reset')}>reset</button>

            </h1>
        </div>
        
     );
}

export default Reducerhookcounterthree;

