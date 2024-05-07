import {React,memo} from 'react'
import { useState } from 'react'

function secondchild({onclick1,counter}) {
  console.log('second child')
  
  return (
    <>
    <div>secondchild</div>
    <button onClick={onclick1}>click second child</button>
    <h1>{counter}</h1>
    </>
    
    
  )
}

export default memo(secondchild)