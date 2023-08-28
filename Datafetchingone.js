import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Datafetchingone() {
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState('')
    const [post, setpost] = useState({})

   const effect= useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(responce => {
                setloading(false)
                setpost(responce.data)
                seterror('')
            })
                    .catch(error => {
                        setloading(false)
                        setpost({})
                        seterror('something went wrong!please try correctly')
                    })

            
    }, [])
    return (
        <div>
        <h1>
        {loading?'loading':post.body}
        {error?error:null}
        </h1>
        </div>
    );
}

export default Datafetchingone;