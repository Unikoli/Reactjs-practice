import react, {PureComponent} from 'react';

class PureComp extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() { 
        console.log('pure component')
        return ( 
            <div>
            <h1>pURE COMPONENT   {this.props.name}</h1>
           
            </div>
         );
    }
}
 
export default PureComp ;