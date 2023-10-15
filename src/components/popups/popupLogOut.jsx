import './Popup.css';

export const PopupLogOut = (props) => {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner-v2'>
        {props.children}
        <button className='cancel-btn' onClick={() => props.setTrigger(false)}>
          Cancel
        </button>
      </div>
    </div>
  ) : (
    ''
  );
};
