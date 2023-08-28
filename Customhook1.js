import react, { useState ,useEffect } from 'react';
import usedocument from './usedocument';

function Customhook1() {
    const [count,setcount]=useState(0)

    usedocument(count)
    
    return ( 
        <div>
            <button onClick={()=>setcount(count+1)}>click me-{count}</button>
        </div>
     );
}

export default Customhook1;