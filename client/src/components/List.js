import React from 'react';
import ListEnrty from './ListEntry';

var List = ({cows,handleClick,handleDelete}) => (
    <div>
        <ul>
        {cows.map((cow)=>{
            return(
            <ListEnrty cow={cow} handleClick={handleClick} handleDelete={handleDelete}/>
            )
        })}
        </ul>
    </div>
);

export default List;