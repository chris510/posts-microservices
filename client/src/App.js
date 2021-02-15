import React from 'react';
import PostCreate from './components/Post/PostCreate';
import PostList from './components/Post/PostList';

export default () => {
    return (
        <div className="container">
            <h1>Create Post</h1>
            <PostCreate />
            <hr />
            <h1>Post</h1>
            <PostList />
        </div>
    )
}