
import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap-theme.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Form,Button } from 'react-bootstrap'
// // import 'bootstrap/dist/js/bootstrap.min.js';
// import { MDBBtn } from ' mdb-react-ui-kit';
class Formtodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputvalue: '',
            todos: []
        }

    }
    submitform = (e) => {
        e.preventDefault();
        console.log(`clicked`)
        this.setState({

            todos: [...this.state.todos, this.state.inputvalue],
            inputvalue: ''
        })

    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.inputvalue} placeholder='enter the text ' onChange={(e) => {this.setState({
                            inputvalue: e.target.value
                        })
                    }} />
                    {/* <div className="container">
                        <div className="form-group">
                            <label htmlFor="exampleInput">Todo-lists</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.inputvalue} placeholder='enter the text ' onChange={(e) => {
                                    this.setState({
                                        inputvalue: e.target.value
                                    })
                                }}

                            />
                        </div>
                    </div> */}
                    <button onClick={this.submitform}>add task</button>
                    <h1>{this.state.todos.map((todo)=>(<h4>{todo}</h4>))}</h1>
                    {/* <div className="d-grid gap-2">
                        <MDBBtn onClick={this.submitform}>Add tasks</MDBBtn>
                        <h1>{this.state.todos.map((todo) => (<h4>{todo}</h4>))}</h1>
                        <MDBBtn>Button</MDBBtn>
                    </div> */}
                </form>
            </div>
        );
    }
}

// // export default Formtodo;
// import { useState } from "react";
// import "./styles.css";

// const images = [
//   "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
// ];

// export default function App() {
//   const [current, setCurrent] = useState(0);

//   function nextSlide() {
//     setCurrent(current === images.length - 1 ? 0 : current + 1);
//   }

//   function prevSlide() {
//     setCurrent(current === 0 ? images.length - 1 : current - 1);
//   }

//   return (
//     <div>
//       <h2>Project 1: Carousel</h2>
//       <div className="slider">
//         <div className="left-arrow" onClick={prevSlide}>
//           ⬅
//         </div>
//         <div className="right-arrow" onClick={nextSlide}>
//           ⮕
//         </div>
//         {images.map(
//           (image, index) =>
//             current === index && (
//               <div key={image} className="slide">
//                 <img src={image} alt="images" />
//               </div>
//             )
//         )}
//       </div>
//     </div>
//   );
// }

