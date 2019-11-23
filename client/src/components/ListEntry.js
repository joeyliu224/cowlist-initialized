import React from 'react'

export default function ListEntry({cow,handleClick,handleDelete}) {
    return (
        <div>
            <li key={cow._id} onClick={handleClick}>{cow.name}</li>
            <button>update</button>
            <button id={cow._id} onClick={handleDelete}>delete</button>
        </div>
    )
}
