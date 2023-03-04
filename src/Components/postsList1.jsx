import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/posts';

function PostList1() {
  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });
  if (postQuery.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }
  return (
    <div>
      <h2>Posts List 1</h2>
      {postQuery.data.map((post) => {
        return <h2 key={post.id}>{post.id + ' ' + post.title}</h2>;
      })}
      {/* <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate('Latest Post')}
      >
        Add New
      </button> */}
    </div>
  );
}

export default PostList1;
