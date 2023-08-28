
import React, { Component, useState } from 'react';

function Searchfilter() {
    const [filtercar, setfiltercar] = useState(0)
    const cars = [
        'lambo', 'mercedis', 'toyota', 'bmw', 'tata', 'honda'
    ]
    const handlechangeevent = (event) => {
        if(event.target.value==''){
        setfiltercar(event)
        return
        }
        const filteredlist =cars.filter((item)=>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()!==-1)
        )
            setfiltercar(filteredlist)
        
    }
    return (
        <div>
            <h1><input type='text' name='search bar' onChange={handlechangeevent} placeholder='Enter the car names' /></h1>
            {/* <h1>{cars.map((e) => (<div>{e}</div>))}</h1>
            <h1>{cars.filter((name) => name.includes('t')).map(filte => (<h4>{filte}</h4>))}</h1> */}
            <h1>{filtercar && filtercar.map((item,index)=>(<div key={index}>{item}</div>))}</h1>
        </div>
    );
}

export default Searchfilter;