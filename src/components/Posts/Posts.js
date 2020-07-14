import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  const { likePost, posts } = props;

  return (
    <div className="posts-container-wrapper">
      {posts.map(item => <Post post={item} likePost={props.likePost} key={item.id} />)}
    </div>
  );
};

export default Posts;
