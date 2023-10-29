import React from 'react';


const Footer = (props)=>{

    // console.log(props)

    return (
        <div className="display-flex justify-content-center align-items-center">
            <h2> Copyright @ {props.copyright}</h2>
        </div>

    )
}

export default Footer;