import react from 'react'

import app from './component/app'
function click(){
     function clickHandler(){
console.log("button clicked!!");
    }
    return(
        <button onClick={clickHandler}>click me</button>
    )
}