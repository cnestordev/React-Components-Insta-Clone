import React, { useState } from "react";
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'
import data from './dummy-data'
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(data)
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [query, setQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState([])

  const filter = e => {
    e.preventDefault()
    setQuery(e.target.value)
    setFilteredPosts(posts.filter(post => post.username.toLowerCase().startsWith(e.target.value.toLowerCase())))
  }

  const likePost = postId => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.likes + 1
        }
      }
      return post
    })
    setPosts(updatedPosts)
  };

  return (
    <div className="App">
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar query={query} filter={filter} />
      <Posts likePost={likePost} posts={filteredPosts.length > 0 ? filteredPosts : posts} />
    </div>
  );
};

export default App;
