import {React,memo} from 'react'
import { useState } from 'react'

function Childcomponent({onclick,count}) {
    console.log('first child')
    const [counter,setcounter]=useState(1);
  return (
    <>
    <div>Childcomponent</div>
    <button onClick={onclick}>clikc first child</button>
    <h1>{count}</h1>
    </>
    
  )
}

export default memo(Childcomponent)