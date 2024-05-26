import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../redux/slices';
import AuthCheck from '../hooks/AuthCheck';
import RevealBoxes from '../components/animations/RevealContent';
import LanguageSwitcher from '../components/LangSwitch'

const Settings = () => {
  const { t } = useTranslation();

  const currentLanguage = useSelector(selectLanguage);

  RevealBoxes();
  
  return (
    <AuthCheck>
      <h2 className="wrapDashboard_header--heading mt-3">{t('settings')}</h2>
      <div className="bodyContent reveal">
        <div className="row">
          <div className="col bodyContent_left px-4 py-5">
            <div className="col-12 child-col-6 px-2">
              <div>{t('languaje')} <b>{currentLanguage}</b></div>
              <div><LanguageSwitcher/></div>
            </div>
          </div>
        </div>
      </div>
    </AuthCheck>
  );
};

export default Settings;