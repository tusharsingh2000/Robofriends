import React from 'react';
const Scroll = (props) =>{
    return (
        <div style={{overflowY : 'scroll', border: '4px solid black', height: '78vh'}}>
            {props.children}
        </div>
    )
};
export default Scroll;