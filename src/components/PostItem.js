import React from 'react';

import profile from '../assets/Perfil.jpg'

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments}) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
      <br/>
      <div id="writeComment">
        <img className="avatar" src={profile} />
        <input 
        type="text" 
        placeholder="Escreva um comentário" 
        className="newComments"
        // onChange={this.handleInputChange} 
        // value={this.state.newComment} 
        />
      </div>
    </div>
  );
}

function PostItem({ author, date, content, comments}) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem