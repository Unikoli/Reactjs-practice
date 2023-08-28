import react, { useState ,useEffect } from 'react';

function Customhook2() {
    const [count,setcount]=useState(0)

    useEffect(()=>{
            document.title=`count-${count}`
    },[count])
    
    return ( 
        <div>
            <button onClick={()=>setcount(count+1)}>click me-{count}</button>
        </div>
     );
}

export default Customhook2;