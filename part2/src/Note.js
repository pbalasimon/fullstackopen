import React from 'react'

const Note = ({ id, content, date }) => {
    return (
        <li>
            <strong>{id}</strong>
            <p>{content}</p>
            <small><time>{date}</time></small>
        </li>
    )
}

export default Note