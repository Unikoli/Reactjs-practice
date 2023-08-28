// import react, { useEffect, useRef } from 'react';

// function Userefocusinput() {
//     const inputref=useRef(null)
//     useEffect(()=>{
//             inputref.current.focus()
//     },[])
//     return ( 
//         <div>
//             <input ref={inputref} type='text'/>
//         </div>
//     );
// }

// export default Userefocusinput;
import react, { useEffect, useRef } from 'react';

function Userefocusinput() {
    const initialvalue=useRef(7)
   
    const handleclick=()=>{
            if(initialvalue.current>5){
                initialvalue.current.console.warn('error');
             
            }
            else {
                
                initialvalue.current=initialvalue.current+1
                console.log(`${initialvalue.current+1}`)
                
            }
      
    }
    return (
        <div>
            // {/* <input ref={inputref} type='text'/> */}
            <button  onClick={handleclick}>count</button>
        </div>
    );
}

export default Userefocusinput;