import React from 'react';
import ListEnrty from './ListEntry';

var List = ({cows,handleClick,handleDelete,handleUpdate,handleNameChange,needUpdate,handleUpdateSubmit,updateName}) => (
    <div>
        <ul>
        {cows.map((cow)=>{
            return(
            <ListEnrty 
                cow={cow}
                handleClick={handleClick}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleNameChange={handleNameChange}
                needUpdate={needUpdate}
                handleUpdateSubmit={handleUpdateSubmit}
                updateName={updateName}/>
            )
        })}
        </ul>
    </div>
);

export default List;