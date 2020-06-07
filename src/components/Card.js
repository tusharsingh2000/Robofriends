import React from 'react'

const Card = (props) =>{
    return(
        <div className='bg-light-green dib br3 pa3 ma3 grow b2 shadow-5' style={{width: '20rem'}}>
          <img src={`https://robohash.org/${props.id}?size=200x200`} alt='robots'></img>
          <div className='tc'>
              <h2>{props.name}</h2>
              <h3>{props.email}</h3>
          </div>  
        </div>
    );
}
export default Card;