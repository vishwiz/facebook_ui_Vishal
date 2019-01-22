import React, {Component} from 'react';

class NewComment extends Component{
    constructor(props){
        super(props)

        this.state = {
            newComment  : ""
        }
    }
addNewComment = (event)=>{
    
   this.setState({newComment:event.target.value})
}

submitNewComment = (event)=>{
    event.preventDefault();
     if(this.state.newComment !=="" ){
    this.props.onAddComment(this.state.newComment,this.props.id)}
    this.setState({newComment:""})
}
    render(){
        return(
            <form onSubmit={this.submitNewComment}>
              <input value={this.state.newComment} onChange={this.addNewComment}  placeholder="comment" />
            </form>
        )
    }
}

export  default NewComment