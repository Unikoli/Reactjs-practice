import react, { useEffect, useRef, useState } from 'react';

function Hooktimer() {
    const [timer,settimer]=useState(0)
    const intialtimer=useRef(0)

    const handlestarthandler=()=>{
        intialtimer.current=setInterval(() => {
            settimer(prevtime=>prevtime+1)
        }, 1000);
    }   
    
    const handlestophandler=()=>{
        clearInterval(intialtimer.current)
    }
    useEffect(()=>{
        return()=>clearInterval(intialtimer.current)
    },[])
    
    return ( 
        <div>
        <h1>count-{timer}</h1>
           
            <button onClick={handlestarthandler} key={handlestarthandler}> starthandler</button>
            <button onClick={handlestophandler} key={handlestophandler}> stophandler</button>
        </div>
     );
}

export default Hooktimer;