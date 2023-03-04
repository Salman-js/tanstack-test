import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPost } from '../api/posts';

function Post({ id }) {
  const postQuery = useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPost(id),
  });
  if (postQuery.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }
  return (
    <div>
      <h2>Post 1</h2>
      <h2>{postQuery.data.id + ' ' + postQuery.data.title}</h2>
    </div>
  );
}

export default Post;
