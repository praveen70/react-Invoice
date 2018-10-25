import React from 'react';

class NotFound extends React.Component{
    render(){
        return(
           
            <div ><h2><strong>NotFound!111!</strong></h2>
            
            <img style={{width:1860}} src={require('../image/error.jpg')} />
            </div>
        );
    }
}

export default NotFound;