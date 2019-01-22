import React from 'react';
import Post from './Post'
import './App.css';

const PostData = props=>{
return(
<div className="main-section">
    {
        (props.posts.map(post=>{
        return (
            <Post post = {post}
            onLikeClick = {props.onLikeClick}
            onAddComment = {props.onAddComment}  />
        )
    }))
    }
</div>
)
}
 
 

export default PostData