import CloseIcon from '@mui/icons-material/Close';
import './Popup.css';

export const PopupPremium = (props) => {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>
          <CloseIcon />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
};
