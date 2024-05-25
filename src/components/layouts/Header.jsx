//import { Link } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LangSwitch';
//import { useSelector } from 'react-redux';
import blankProfile from '../../assets/images/blank-profile.png';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  //const { t } = useTranslation();
  //const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <header className='wrapDashboard_header'>
        <div className="container-fluid">
          <div className='row justify-content-end'>

            <nav className='header_menu--nav'>
              <ul>
                <li>
                  <div className='header_menu--langPicker'>
                    <LanguageSwitcher />
                  </div>
                </li>
                <li><PeopleAltIcon fontSize="small" /></li>
                <li><NotificationsIcon fontSize="small" /></li>
                <li>
                  <div className="header_menu--profile">
                    <img src={blankProfile} alt="Profile" />
                  </div>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;