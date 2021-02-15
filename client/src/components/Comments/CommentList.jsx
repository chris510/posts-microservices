import React from 'react';

export default ({ comments }) => {
    return (
        <div>
            {comments.map((comment) => (
                <li key={comment.id} >
                    {comment.content}
                </li>
            ))}
        </div>
    )
}