import react,{memo} from 'react';


function Count() {
    console.log('rendering count ')
    return ( 
            <div>
                hello counter component
            </div>
     )
}

export default memo(Count);