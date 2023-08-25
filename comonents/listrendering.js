//********list rendering using map() method *********
// import react from 'react';
// function namelist () {
//     const names = ["unque", "olee", "jhuma"];
//     const namelist = names.map(function (name) {
//         <h2>{name}</h2>
//         const namelists=names.map(name=><h2>{namelist}</h2>)
//     })
//     return ( 
//         <h2>{namelist}</h2>

//      );
// }

// export default namelist 

//*************list rendering using map()method
import { Component } from "react";
import react ,{ Component}from 'react';

function listrendering() {
    const persons = [

        {
            id: 1,
            name: "unique",
            age: 35
        },
        {
            id: 2,
            name: "richa",
            age: 40
        },
        {
            id: 3,
            name: "pratyus",
            age: 50
        },
        {
            id: 4,
            name: "ankit",
            age: 60
        }


    ]
    
}
const names=["ram", "hari", "sita", "unqiue"]
const namelis=names.map((Name,index)=> <div key={index}  >{index} {Name}</div>)
const detailsPerson = persons.map((parameter) =>
    <person parameter={parameter} key={parameter.id} value={parameter.name} />)


return (
    <div>{detailsPerson}</div>
);
// }
//*************click event using setState***************

export default listrendering;
// import react from 'react';
// class clickEvent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             message: "nice you bitch have cliked the button"
//         }

//     }
//     buttonclick() {
//         this.setState = {
//             message: "go to hell bitch"
//         }
//     }


//     render() {
//         return (
//             <div>
//             <h1>{this.state.message}</h1>
//                 <button onClick={() => buttonclick()}>touch my boobs</button>
//             </div>
//         );
//     }
// }

// export default clickEvent;

function propsMethod(props) {
    const [name, message, job] = props;
    return (
        <div>
            <h1>hello mother fucker!! {name} </h1>
            <h1>hello mother fucker!! {message} </h1>
            <h1>hello mother fucker!! {jpb} </h1>
        </div>
    );
}

// export default propsMethod;
