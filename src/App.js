import React, { Component } from 'react';
import './App.css';
import Like from "./like.js";
// import Image from "./imagePost.js"
import ImagePost from './imagePost.js';
import Comment from "./comment.js";

class App extends Component {
  constructor(props){
    super(props)
    this.likesHandler= this.likesHandler.bind(this)
    this.updateComment = this.updateComment.bind(this)
    this.addComments = this.addComments.bind(this)
    this.check = this.check.bind(this)
    this.state = {
      data: [
        {
        'item_description' : 'This is a text only item',
        'image' : '',
        'likes' : 10,
        'comments' :
         [
           {
             'comment' : 'This is a comment',
            'created_at' : 'Fri May 11 2018 19:17:43 GMT+0530 (IST)'
          },
          {
            'comment' : 'This is another comment',
            'created_at' : 'Fri May 10 2018 15:23:36 GMT+0530 (IST)'
          }
        ]
      }
      ,
      {
        'item_description' : 'This is an item with an image',
        'image' : '/path/to/image.png',
        'likes' : 20,
        'comments' : [
          {
            'comment' : 'This is a comment',
            'created_at' : 'Fri May 11 2018 19:17:43 GMT+0530 (IST)'
          },
          {
            'comment' : 'This is another comment',
            'created_at' : 'Fri May 10 2018 15:23:36 GMT+0530 (IST)'
          }
        ]
      }
    ],
    likes_check:false,
    initial_comment:""
    }
  }
  likesHandler(){
    let likes = this.state.data
    let check = this.state.likes_check;
    if(!check===true){
      check = !check;
      ++likes[0]['likes']
    }else{
      check = !check;
      --likes[0]['likes']
    }
   this.setState({
          data : likes,
          likes_check:check
   })

  }
  addComments(event){
    event.preventDefault();
     let dataComments = this.state.data
     let inital_comment = this.state.initial_comment
     dataComments[0]['comments'].push({comment:inital_comment})
     console.log(dataComments)
     this.setState({
       data : dataComments,
       initial_comment:""
     })
  }
  updateComment(event){
    this.setState({
      initial_comment:event.target.value
    })
  }

  check(event){
    if(event.target.value==="k"){
      console.log('kels')
    }
    
  }
  render() {
    return (
      <section>
        <select refs="dataType">
          <option value="k">None</option>
          <option value="0">Text only</option>
          <option value="1">Image Only</option>
          <option value="0,1">All</option>
        </select>
        <button onClick={this.check}></button>
          <center>
          <div className="main-section">
          <Like     
    postDescription={this.state.data}
    likeEventTrigger={this.likesHandler}
/>
      <Comment
          postDescription={this.state.data}
          initial_comment={this.state.initial_comment}
          updateComment={this.updateComment}
          addComments={this.addComments}
       />
     <ImagePost />
    </div>
          </center>
        </section>
    );
  }
}

export default App;
