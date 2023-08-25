import react from 'react';
import './mystyle.css';
function stylesheet(props) {
    let className=props.primary ? 'primary' :''
    return (
        <div>
        <h1 className={className}>stylesheet</h1>

        </div>
      );
}

export default stylesheet;