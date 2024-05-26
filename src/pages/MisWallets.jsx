import { useTranslation } from 'react-i18next';
import AuthCheck from '../hooks/AuthCheck';
import RevealBoxes from '../components/animations/RevealContent';


const Wallets = () => {
  const { t } = useTranslation();

  RevealBoxes();
  
  return (
    <AuthCheck>
      <h2 className="wrapDashboard_header--heading mt-3">{t('wallets')}</h2>
      <div className="bodyContent reveal">
        <div className="row">
          <div className="col bodyContent_left px-4 py-5">
            <div className="col-12 child-col-6 px-2">

            </div>
          </div>
        </div>
      </div>
    </AuthCheck>
  );
};

export default Wallets;