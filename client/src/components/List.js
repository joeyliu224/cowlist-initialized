import React from 'react';

var List = ({cows}) => (
    <div>
        <ul>
        {cows.map((cow)=>{
            return<li key={cow._id}>{cow.name}</li>
        })}
        </ul>
    </div>
);

export default List;