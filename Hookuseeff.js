
import React, { useState, useEffect } from 'react';
function Hookuseeff() {
    const [count, setCount]=useState(0)
    const [name, setName]=useState('')

    useEffect(()=>{
        console.log('updating document title')
        document.title=`clciked ${count} times`
    },[count])
    return ( 
        <div>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <input onClick={()=>{setCount(count+1)}}>click {count} times</input>
        </div>
     );
}

export default Hookuseeff;