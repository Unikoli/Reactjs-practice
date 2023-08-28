import react, { useCallback, useState } from 'react';
import Count from './Count';

function Usecallbackparent() {
    const [age, setage] = useState(20)
    const [salary, setsalary] = useState(1000)

    const incrementage=useCallback(()=>{
        setage(age +10)
    },[age])

    const incrementsalary=()=>{
        setsalary(salary +4000)
    }

    return (
       
        <div>
           {console.log('rendering parent component')}
            <h1>
            <Count/>
                <button onClick={incrementsalary}>increment salary-{salary}</button>
                
                <button onClick={incrementage}>increment age-{age}</button>
            </h1>
        </div>
    );
}

export default Usecallbackparent;