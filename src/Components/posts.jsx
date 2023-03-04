import React, { useState } from 'react';
import NewPost from './newPost';
import NewPage from './newPost';
import PostListPaginated from './paginatedPostList';
import Post from './post';
import PostListInfinite from './PostListInfinite';
import PostList1 from './postsList1';
import PostList2 from './postsList2';

function Posts() {
  const [currentPage, setCurrentPage] = useState(<PostList1 />);
  return (
    <div>
      <button onClick={() => setCurrentPage(<PostList1 />)}>Post List 1</button>
      <button onClick={() => setCurrentPage(<PostList2 />)}>Post List 2</button>
      <button onClick={() => setCurrentPage(<Post id={1} />)}>
        First Post
      </button>
      <button onClick={() => setCurrentPage(<NewPost />)}>New Post</button>
      <button onClick={() => setCurrentPage(<PostListPaginated />)}>
        Paginated
      </button>
      <button onClick={() => setCurrentPage(<PostListInfinite />)}>
        Infinite
      </button>
      {currentPage}
    </div>
  );
}

export default Posts;
