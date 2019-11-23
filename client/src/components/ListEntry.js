import React from 'react'

export default function ListEntry({cow,handleClick,display}) {
    return (
        <div>
            <li key={cow._id} onClick={handleClick}>{cow.name}</li>
        </div>
    )
}
