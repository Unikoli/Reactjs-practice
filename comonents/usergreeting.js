
import react from 'react';
class usergreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isloggedin: false
        }
    }

    render() {
        // *******use of conditional rendering operator using if else condition******
        // if (this.state.isloggedin) {
        //     return <div>welcome unqiue</div>
        // }
        // else 
        //     return (
        //          <div>welcome guest</div>
        //         )

        // *********conditional rendering declaring one of the variable********
        // let message;
        // if(this.state.isloggedin){
        //     message=<div>welcome unqiue</div>

        // }
        // else {
        // message=<div>welcome guest</div>
        // return <div>{message}</div>
        // }

        //********use of conditonal ternery operator ********
        // this.state.isloggedin?
        // <div>welcome unque </div>:
        // <div>welcome guest</div>


        
    }
}

export default usergreeting;