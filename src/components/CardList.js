import React from 'react';
import Card from './Card';

const CardList = (props) =>{
    return (
    <div>
        {
        props.robots.map((user,i)=>{
            return <Card key={i} id={props.robots[i].id} name={props.robots[i].name} email={props.robots[i].email}/>
        })
        }    
    </div>
    );
};
export default CardList;