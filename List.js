import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data });
            })
            .catch(error => {
                console.log(error)
                console.log(error);
            });

    }

    render() {
        const { posts } = this.state
        return (
            <ul>


                {posts.map((p) => (
                    <h2 >

                        <li> {p.title}
                            {p.id}
                        </li>
                    </h2>

                ))}

            </ul>
        );
    }
}

export default List;