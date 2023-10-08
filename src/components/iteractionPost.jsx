export const IteractionPost = ({
  CommentIcon,
  RepeatIcon,
  LikeIcon,
  ViewsIcon,
  numsComments,
  numsRetweets,
  numsLikes,
  numsViews,
}) => {
  return (
    <ul>
      <li>
        <CommentIcon /> {numsComments}
      </li>
      <li>
        <RepeatIcon /> {numsRetweets}
      </li>
      <li>
        <LikeIcon /> {numsLikes}
      </li>
      <li>
        <ViewsIcon /> {numsViews}
      </li>
    </ul>
  );
};
