
// using useMemo hook in react 
import react, { useMemo, useState } from 'react';

function Counter() {
    const [countOne,setcountOne]=useState(0)
    const [countTwo,setcountTwo]=useState(0)

    const incrementOne=()=>{
        setcountOne(countOne +1)
    }

    const incrementTwo=()=>{
        setcountTwo(countTwo +1)
    }
    const iseven= useMemo(()=>{
        let i=0
        while(i<1000000000) i++
            return (countOne %2===0)
    },[countOne])
    

    return ( 
        <div>
            <h2>
                <button onClick={incrementOne}>counterOne-{countOne}</button>
                <span> {iseven ?"even":"odd"}</span>
                <button onClick={incrementTwo}>counterTwo-{countTwo}</button>
            </h2>
        </div>
     );
}


export default Counter;