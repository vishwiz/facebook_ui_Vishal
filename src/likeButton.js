import React from 'react';
import './likeButton.css';

const LikeButton = (props)=>{
  let isLiked = props.isLiked;
  let isLikedText = isLiked ? "Unlike" : "Like"
  return (
    <div className="like-section-button">
    <p>{props.postLikes}</p>
     <button onClick = {()=>props.onLikeClick(props.id)}>{isLikedText}</button>
    </div>
  )
}

export default LikeButton