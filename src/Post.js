import React from 'react';
import LikeButton from './likeButton';
import Comment from './comment'

const Post = props =>{
    let post  = props.post
    return(
        <div>
           <h1>{post['item_description']}</h1>
           {
               post['image'] ? <img src={post['image']} alt="post_image" /> : null
           } 
           <LikeButton postLikes={post.likes}
           isLiked = {post.isLiked}
           id = {post.id}
           onLikeClick = {props.onLikeClick}
           />
           <Comment 
           postComment = {post.comments}
           id = {post.id} 
           onAddComment = {props.onAddComment}/>
        </div>
    )
}

export default Post