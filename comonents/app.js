// import React, { component } from "react";

// class classclick extends component {
//     constructor(props){
//         super(props);
//             this.state={
//                 name:'uneek',
//                 message:'hello buddy'
//             }
//     }
//     clickHandler(){
//         this.setState={
//             message:'good bye'
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1> { this.state.message}</h1>
//                 <button onClick={()=>this.clickHandler()}></button>

//             </div>
//         )
//     }
// }
// export default app

// // class clssclick extends component {
// //     constructor(){
// //         super();
// //         this.state={
// //             message:'hello bro how are you::'
// //         }
// //     }
// //     buttonclicked(){
// //         this.setState={
// //             message:"hello boy how are you my dear boy.."
// //         }
// //     }
// //     render(){
// //         return(
// //           <div>
// //             <h1>{this.state.message}</h1>
// //             <button onClick={()=>{buttonclicked()}}></button>
// //             </div>
// //         )
// //     }
// // }
// // // import React from "react"

// // // const name = (props) => {
// // //   return (
// // //     <div>
      
// // //     </div>
// // //   )
// // // };

// // // export default name;


// // const app = () => {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // };

// // export default app


// // class  extends Component {
// //     constructor(props) {
// //         super(props);
// //     }
// //     state = {  }
// //     render() { 
// //         return (  );
// //     }
// // }
 
// // export default ;
// // import react from  'react'
// // import usergreeting from './usergreeting';
// // import listrendering from './component/listrendering';
// // class app extends Component {
    
// //     render() { 
// //         return ( 
// //             <div>
// //                 <usergreeting/>
// //                 <listrendering name="unqiue olee" message="fuck you bitch" job="masterbation"/>
// //                 </div>
// //          ) 
// //     }
// // }
 
// // export default app;


import react from 'react';
import app from './src/profile/comonents/stylesheet.js';
import './appstyle.css'
import './appstyle.module.css'
import styles from'./src/profile/comonents/inline.js'
import styles from './stylesheet.module.js'
function person () {
    return ( 
        <div>
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>success</h1>
            {/* <h2>
            <h2>hello iam {parameter.name} .
                iam{parameter.age}  years old </h2>
            </h2> */}
            <StyleSheet primary={true}/>
            <inline/>
        </div>
     )
}

export default person;