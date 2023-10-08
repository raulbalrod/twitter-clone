import { useState } from 'react';
import { Popup } from './popup';

export const PPPremium = () => {
  const [btnPopup, setBtnPopup] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSubscriptionClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='div-premium-popup'>
      <h1>Who are you?</h1>
      <p>Choose the right subscription for you:</p>

      <div className='type-of-subscriptions'>
        <div
          className={`type-of-subscription ${
            activeIndex === 0 ? 'type-of-subscription--active' : ''
          }`}
          onClick={() => handleSubscriptionClick(0)}
        >
          <span>Premium</span>
          <h3>I am an individual</h3>
          <span>For individuals and creators</span>
        </div>

        <div
          className={`type-of-subscription ${
            activeIndex === 1 ? 'type-of-subscription--active' : ''
          }`}
          onClick={() => handleSubscriptionClick(1)}
        >
          <span>Premium</span>
          <h3>I am an individual</h3>
          <span>For individuals and creators</span>
        </div>
      </div>

      <button className='subscibe-btn' onClick={() => setBtnPopup(true)}>
        Subscribe
      </button>

      <p>
        Learn more about <span>Premium</span> and{' '}
        <span>Verified Organizations</span>
      </p>

      <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
        <div className='function-no-avaible'>
          <h3>
            <i>
              This function is not available for now in this version of the
              Twitter clone/ x
            </i>
          </h3>
          <img
            src='https://media.tenor.com/RpghvJN-ucgAAAAM/sorry.gif'
            alt='srry-gif'
          />
        </div>
      </Popup>
    </div>
  );
};
