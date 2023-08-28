// import react from 'react'
// import ReactDOM from 'react-dom/client';
// class form extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             comment: '',
//             topic:'react',
//             password:'enter the text'
//         }

//     }
//     handleUsernameChange = (event) => {
//         this.setState({
//             username: event.target.value
//         });
//     }
//     handleComments = (event) => {
//         this.setState({
//             comment: event.target.value
//         });
//     }
//     topicHandler=(event)=>{
//         this.setState({
//             topic:event.target.level
//         });
//     }
//     handlePassword=(event)=>{
//         this.setState({
//             password:event.target.value
//         });
//     }
//     handleSubmit=(event)=>{
//         alert(`${username} ${comment} ${password} ${state.topic}` )
//         event.preventDefault()

//         }
//     }


//     render() {
// //         const[username,password,comment,topic]=this.state
// //         return (
// //             <form onSubmit={this.handleSubmit}>
// //                 <div>
// //                     <level>username</level>
// //                     <input type="text" value={username} onChange={this.handleUsernameChange} />
// //                 </div>

// //                 <div>
// //                     <level>password</level>
// //                     <input type="password" value={password} onChange={this.handlePassword}></input>
// //                 </div>

// //                 <div>
// //                     <level>comments</level>
// //                     <textarea value={comment} onChange={this.handleComments} />
// //                 </div>

// //                 <div>
// //                     <level>topic</level>
// //                     <select value={topic} onChange={this.topicHandler}>
// //                         <option value="react" >react</option>
// //                         <option value="angular" >angular</option>
// //                         <option value="vue" >vue</option>

// //                     </select>

// //                     <div>
// //                         <button type="submit"> submit </button>
// //                     </div>

// //                 </div>
// //             </form>
// //         )
// //     }

// // }

// // export default form;

// import react  from 'react';

// class  form extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             username:'',
//             password:''
//         }
//     }
//     HandleUsername=(event)=>{
//         this.setState({
//             username:event.target.value

//         })
//         handlepassword=(event)=>{
//             this.setState({
//                     password:event.target.value
//             })
//         }
//         handleSubmit=>(event)=>{
//             alert(`${this.state.username} ${this.state.password}`)
//             event.preventDefault()
//         }
//         }

//     }
//     render() { 
//         return ( 
//             <form onSubmit={this.handleSubmit}>
//                 {/* <div>
//                     <level>username</level>
//                     <input value={this.state.value} onChange={this.HandleUsername}></input>
//                 </div> */}
//                 <div>
//                     <level>username</level>
//                     <input value={this.state={username:''} } onChange={this.HandleUsername=(event)=>{this.setState({username:event.target.value})}}></input>
//                 </div>

//                 <div>
//                     <level>password</level>
//                     <input value={this.state={password:''}} onChange={this.handlepassword=(e)=>{this.setState({password:e.target.value})}}></input>
//                     </div>
//                     <div>
//                         <button  type='submit'>submit</button>
//                     </div>
//             </form>
//          );
//     }
// }

// export default form;
import react, {Component} from 'react';
class Formsimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // username: '',
            comment:''
        }
    }
    // handleUsername = (event) => {
    //     this.setState({
    //         username: event.target.value
    //     })
    // }
    handlechangecomment=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    handlechangetopic=(event)=>{
        this.setState({
            topic:'react'
        })
    }
    handlesubmitbutton=(event)=>{
        alert(`${this.state.username}`)
        event.preventDefault()
    }

render()
{
    return (
        <form onSubmit={this.handlesubmitbutton}>
            <div>
                <label>username</label>
                <input type='text' value={this.state.value} onChange={this.handleUsername} />
            </div>
            <div>
                <label>comments</label>
                <input type='text' value={this.state.comment} onChange={this.handlechangecomment}></input>
            </div>
            <div>
                <label>topic</label>
                <select value={this.state.topic} onChange={this.handlechangetopic}>
                <option type='angular'>angular</option>
                <option type='react'>reaact</option>
                <option type='vue'>vue</option>
                </select>
            </div>

        <div>
            <button >submit</button>
        </div>
        </form>
    );
}
}


export default Formsimple;