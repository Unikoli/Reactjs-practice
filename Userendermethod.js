import React,{  useMemo, useState } from "react";
import Userendermethod2 from './Userendermethod2';

function Userendermethod() {
    const [countone,setcountone]=useState(0)
    const [count2,setcount2]=useState(0)

    
    const handleincrementone=
        ()=>{
            console.log('clicked in first method')
            setcountone(countone+1)
        }
    
    const iseven=useMemo(()=>{
        return handleincrementone%2===0
    },[countone])

    const handleincrement2=()=>{
        console.log('clicked in second method')
        setcount2(count2+1)
    }


    return (  
        <div>
         <h1> <button onClick={handleincrementone}>increment1 {countone}</button></h1> 
         <h1> {iseven ? "even" : "odd"}</h1>
         <h1> <button onClick={handleincrement2}>increment2 {count2}</button></h1> 
         <Userendermethod2/>
        </div>
    );
}

export default Userendermethod;