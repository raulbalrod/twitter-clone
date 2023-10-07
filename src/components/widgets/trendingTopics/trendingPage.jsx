export const TredingTopicsPage = ({ category, title, posts }) => {
  return (
    <div className='trending-pages'>
      <p>{category} · Trending</p>
      <b>{title}</b>
      <p>{posts} posts</p>
    </div>
  );
};
