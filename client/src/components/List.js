import React from 'react';
import ListEnrty from './ListEntry';

var List = ({cows,handleClick}) => (
    <div>
        <ul>
        {cows.map((cow)=>{
            return(
            <ListEnrty cow={cow} handleClick={handleClick}/>
            )
        })}
        </ul>
    </div>
);

export default List;