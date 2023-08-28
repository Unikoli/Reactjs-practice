
import React, { useReducer } from 'react';
const initialvalue = {
    firstcounter: 0,
    secondcounter:10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstcounter: state.firstcounter + action.value }

        case 'decrement':
            return { firstcounter: state.firstcounter - action.value }

        case 'increment5':
            return { secondcounter: state.secondcounter + action.value }

        case 'decrement5':
            return { secondcounter: state.secondcounter - action.value }

        // case 'reset':
        //     return { firstcounter: state.firstcounter * action.value }

        case 'reset':
            return initialvalue

        default:
            return state
    }
}
function Reducerhookcountertwo() {
    const [count, dispatch] = useReducer(reducer, initialvalue)
    return (
        <div>
            <h1>count={count.firstcounter}</h1>
            <h1>count={count.secondcounter}</h1>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button>
            <button onClick={() => dispatch({ type: 'increment5', value: 5 })}>increment5</button>
            <button onClick={() => dispatch({ type: 'decrement5', value: 5 })}>decrement5</button>

            <button onClick={() => dispatch({ type: 'reset', value: 0 })}>reset</button>

        </div>
    );
}

export default Reducerhookcountertwo;
