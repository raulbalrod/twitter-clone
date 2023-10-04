import './SideBar.css';

export const SideBarOption = ({ Icon, textIcon, active }) => {
  return (
    <div className={`sideBar-option ${active && 'sideBar-option--active'}`}>
      <Icon className='svg-sideBar' />
      <h3>{textIcon}</h3>
    </div>
  );
};
