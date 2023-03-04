import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function PostList2() {
  const queryClient = useQueryClient();
  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });
  const newPostMutation = useMutation({
    mutationFn: (post) => {
      wait(1000).then(() => POSTS.push({ id: crypto.randomUUID(), post }));
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });
  if (postQuery.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }
  return (
    <div>
      <h2>Posts List 2</h2>
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

export default PostList2;
