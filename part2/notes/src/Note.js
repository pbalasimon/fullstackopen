import React from 'react'

const Note = ({ id, title }) => {
    return (
        <li>
            <strong>{id}: </strong> {title}
        </li>
    )
}

export default Note