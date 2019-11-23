import React from 'react'

export default function ListEntry({cow,handleClick,handleDelete,handleUpdate,handleNameChange,needUpdate,handleUpdateSubmit}) {
    return (
        <div>
            <li key={cow._id} onClick={handleClick}>{cow.name}</li>
            <button id={cow._id} onClick={handleUpdate}>update</button>
            {needUpdate ? 
                <form id={cow._id} onSubmit={handleUpdateSubmit}>
                    <input type='text' value='' onChange={handleNameChange}/>
                    <input type='submit' value='Confirm'/>
                </form>
                :null}<br/>
            <button id={cow._id} onClick={handleDelete}>delete</button>
        </div>
    )
}
