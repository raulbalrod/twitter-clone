import { useState } from 'react';
import { PopupPremium } from '../../popups/popupPremium';
import { PPPremium } from '../../popups/ppPremium';

export const SubscriptionsTwitter = () => {
  const [btnPopupPremium, setBtnPopupPremium] = useState(false);
  return (
    <div className='subscription-premium'>
      <h3>Suscribe to Premium</h3>
      <span>
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </span>
      <button
        className='subscribe-premium-btn'
        onClick={() => setBtnPopupPremium(true)}
      >
        Subscribe
      </button>

      <PopupPremium trigger={btnPopupPremium} setTrigger={setBtnPopupPremium}>
        <PPPremium />
      </PopupPremium>
    </div>
  );
};
