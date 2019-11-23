import React from 'react';
import ListEnrty from './ListEntry';

var List = ({cows}) => (
    <div>
        <ul>
        {cows.map((cow)=>{
            return(
            <ListEnrty cow={cow}/>
            )
        })}
        </ul>
    </div>
);

export default List;