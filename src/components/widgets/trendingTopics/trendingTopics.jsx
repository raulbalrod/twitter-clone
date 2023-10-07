export const TredingTopics = ({ category, title, posts, id }) => {
  return (
    <div className='trending-topic'>
      <p>
        {id} · {category} · Trending
      </p>
      <b>{title}</b>
      <p>{posts} posts</p>
    </div>
  );
};
