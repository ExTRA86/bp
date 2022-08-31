import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/posts`)
    //   .then(response => response.json())
    //   .then(json => setPosts(json.slice(0, 10)));

    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, {
        params: {
          _limit: 10,
          _page: 1,
        },
      })
      .then(response => {
        const allPosts = response.data;
        setPosts(allPosts);
      });
    // eslint-disable-next-line
  }, []);

  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
