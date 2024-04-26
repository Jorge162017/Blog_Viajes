function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}


