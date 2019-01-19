import React from 'react';
import './comment.css';

const Comment  = (props)=>{
    return (
        <form onSubmit={props.addComments}>
        <p className="comment-section" >{props.postDescription[0].comments.map((x)=>{
            return(
                <div>{x['comment']}</div>
            )
        })}</p>
        {  <input type="text" value={props.initial_comment} onChange={props.updateComment} placeholder="comments" />}
      
    </form>
    )
}

export default Comment