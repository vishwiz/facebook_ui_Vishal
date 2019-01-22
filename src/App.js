import React, { Component } from 'react';
import './App.css';
import image from './react.jpg';
import PostData from "./postData.js";
// import Comment from "./comment.js";
// import LikeButton from "./likeButton.js"
import SelectOption from "./selectOption.js"

class App extends Component {
  constructor(props){
    super(props)
    this.onLikeClick= this.onLikeClick.bind(this)
    this.onAddComment = this.onAddComment.bind(this)
    this.onSelect = this.onSelect.bind(this)

    this.state = {
      data: [
        {
          'id':0,
        'item_description' : 'This is a text only item',
        'image' : '',
        'likes' : 10,
        'isLiked':false,
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
        'id':1,
        'item_description' : 'This is an item with an image',
        'image' : image,
        'likes' : 20,
        'isLiked':false,
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
      },
      {
        'id':2,
      'item_description' : 'This is a text only item',
      'image' : '',
      'likes' : 10,
      'isLiked':false,
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
    ],
    optionValue: "All",
    }
  }

  onLikeClick(id){
    this.setState({
      data:this.state.data.map(post=>{
        if(post.id===id){
          let newPost = {...post}
        newPost.isLiked = !newPost.isLiked
        newPost.likes = newPost.isLiked ? ++newPost.likes : --newPost.likes
        return newPost;
        }
        return post
      })
    })
  }

  onAddComment(newComment,id){
     this.setState({
       data : this.state.data.map(post=>{
           if(post.id===id){
             let newPost = {...post}
             newPost.comments.push({
               comment:newComment,
               created_at: Date()
             })
             return newPost;
           }
           return post
       })
     })
  }
   
onSelect(e){
   this.setState({ optionValue: e.target.value })
}
  render() {
    let option = this.state.optionValue
    let posts = [];
    switch(option){
     case "Image" :
     posts = this.state.data.filter(post=> post['image'])
     break;
    
     case "Text" :
     posts = this.state.data.filter(post=> !post['image'])
     console.log(posts)
     break;

     case "None" :
     posts = []
     break;

     default:
     posts =  this.state.data
     break;
     
    }
    
    return (
      <section>
            <SelectOption onSelect = {this.onSelect} />
           <center>
            <PostData 
            posts={posts}
            onLikeClick = {this.onLikeClick}
            onAddComment = {this.onAddComment} />
            </center>
        </section>
    );
  }
}

export default App;
