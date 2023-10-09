import CloseIcon from '@mui/icons-material/Close';
import './Popup.css';

export const PopupNewPosts = (props) => {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        {props.children}
        <button className='close-btn' onClick={() => props.setTrigger(false)}>
          <CloseIcon />
        </button>
      </div>
    </div>
  ) : (
    ''
  );
};
