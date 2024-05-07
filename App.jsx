import { useState } from 'react'

import Childcomponent from './Childcomponent.jsx'
import Secondchild from './Secondchild.jsx'
import { useCallback } from 'react'

function App() {

  const [count,setcount]=useState(0);
  const [counter,setcounter]=useState(0);

 const handlechildclick=
 useCallback(
  ()=>{
    setcount(count+1);
   }
  ,[count])
 
 const handlesecondclick=
 useCallback(()=>{
  setcounter(counter+1);
 },[counter])
 

  return (
    <>
    < Childcomponent onclick={handlechildclick} count={count} />
    < Secondchild  onclick1={handlesecondclick} counter={counter}/>
    </>
    
  )
}

export default App
