import './Post.css';

export const PostTwitter = ({
  userName,
  name,
  CommentIcon,
  RepeatIcon,
  LikeIcon,
  ViewsIcon,
}) => {
  return (
    <div className='post'>
      <div className='post-content'>
        <img
          src={`https://unavatar.io/${userName}`}
          alt='avtar-profile-img'
          width='80px'
          height='80px'
        />
        <div className='post-details'>
          <div className='post-username-data'>
            <b>{name}</b> <span>@{userName} · 16h</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            repellendus voluptatem ullam repudiandae blanditiis provident qui
            minima eos dicta corrupti, consectetur, eligendi ea ipsa sit
            expedita voluptates assumenda ipsum aut.
          </p>
        </div>
      </div>

      <ul>
        <li>
          <input type='checkbox' />
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
    </div>
  );
};
