import React from 'react';
import NewCommnet from './newComment';
import './comment.css';

// const Comment  = (props)=>{
//     return (
//         <form onSubmit={(event)=>props.addComments(event,props.postDescription.id)}>
//         <p className="comment-section" >{props.postDescription.comments.map((itemComment)=>{
//             return(
                
//                 <div>
//                 {itemComment['comment']}
//                 <div>{itemComment['created_at']}</div>
//                                 </div>
//             )
//         })}</p>
//         {/* {  <input type="text" value={props.initial_comment} onChange={props.updateComment} placeholder="comments" />} */}
//       { <input type="text" value={props.postDescription.initial_comment} onChange={event=>props.updateComment(event,props.postDescription.id)} placeholder="comments" />}
//     </form>
//     )
// }const Comment  = (props)=>{
//     return (
//         <form onSubmit={(event)=>props.addComments(event,props.postDescription.id)}>
//         <p className="comment-section" >{props.postDescription.comments.map((itemComment)=>{
//             return(
                
//                 <div>
//                 {itemComment['comment']}
//                 <div>{itemComment['created_at']}</div>
//                                 </div>
//             )
//         })}</p>
//         {/* {  <input type="text" value={props.initial_comment} onChange={props.updateComment} placeholder="comments" />} */}
//       { <input type="text" value={props.postDescription.initial_comment} onChange={event=>props.updateComment(event,props.postDescription.id)} placeholder="comments" />}
//     </form>
//     )
// }


const Comment = (props)=>{
    //  console.log(props)
        return(
            <div>
                <p className="comment-section">
                        {
                           props.postComment.map(comment=>{
                               return(
                                <div><h2>{comment['comment']}</h2>
                                   <p>{comment['created_at']}</p>
                                </div>
                                 
                               )})
                        }
                     </p>
                     
                     <NewCommnet id = {props.id} onAddComment = {props.onAddComment} />
            </div>
        )
    
}
export default Comment