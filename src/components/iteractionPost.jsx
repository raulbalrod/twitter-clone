export const IteractionPost = ({
  CommentIcon,
  RepeatIcon,
  LikeIcon,
  ViewsIcon,
}) => {
  return (
    <ul>
      <li>
        <CommentIcon />
      </li>
      <li>
        <RepeatIcon />
      </li>
      <li>
        <LikeIcon />
      </li>
      <li>
        <ViewsIcon />
      </li>
    </ul>
  );
};
