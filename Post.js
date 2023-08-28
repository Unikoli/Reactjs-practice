import react, {Component} from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';

function Post () {
    const [data,setData]=useState({})
   

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
        .then((responce)=>
        {
            // setData({ posts: responce.data });
            console.log(responce)
            setData(responce.data)
            
        })
        .catch((error)=>{
            console.log(error)
        })
    },[] )

    return (
            
        <div>
            {data.map((post)=>(
                <div key={post.id}> {post.title} </div>
            ))}
        </div>
      );
}

export default Post ;