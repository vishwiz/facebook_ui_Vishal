import React from 'react';
import './App.css';

const Like = props=>{
 return (   
       <section>
           {/* <center> */}

            {/* <div className="like-section"> */}
    <div>
    <h1>{props.postDescription[0].item_description}</h1>
    
   <div className="like-section-button">
   <p>{props.postDescription[0].likes}</p>
    <button onClick = {props.likeEventTrigger}>like</button>
   </div>
    </div>
  

  {/* </div> */}
  {/* </center> */}
  
           </section>
    )
}
 
 

export default Like