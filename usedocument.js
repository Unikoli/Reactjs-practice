import  { useEffect } from 'react';

function usedocument() {
    const [count,setcount]=useState(0)

    useEffect((count)=>{
            document.title=`count-${count}`
    },[count])
    

        
}

export default usedocument;