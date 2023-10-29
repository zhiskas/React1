import React from 'react';


const Main = (props)=>{

    // console.log(props)

    return (
        <div className="display-flex justify-content-center align-items-center">
            <h2> Welcome to our website {props.greet}</h2>
        </div>

    )
}

export default Main;