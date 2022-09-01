import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './PostStyle.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

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

    axios
      .get(`https://jsonplaceholder.typicode.com/comments`, {
        params: {
          _limit: 10,
          _page: 1,
        },
      })
      .then(response => {
        const allComments = response.data;
        setComments(allComments);
      });
    // eslint-disable-next-line
  }, []);

  // console.log(posts);
  // console.log(comments[0]);
  return (
    <div className='posts'>
      <h2>Posts</h2>
      <div className='post__list'>
        {posts.map(post => (
          <div key={post.id} className='post__item'>
            <div>
              <strong>Title: </strong>
              {post.title}
            </div>
            <div>
              <strong>Body: </strong> {post.body}
            </div>
            <div>
              <strong>Comments: </strong>
              {comments[post.id - 1].name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
