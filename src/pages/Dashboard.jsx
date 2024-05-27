import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AuthCheck from '../hooks/AuthCheck';
import RevealBoxes from '../components/animations/RevealContent';


const Dashboard = () => {
  const { t } = useTranslation();

  RevealBoxes();
  
  return (
    <AuthCheck>
      <h2 className="wrapDashboard_header--heading mt-3">{t('dashboard')}</h2>
      <div className="bodyContent reveal">
        <div className="row">
          <div className="col bodyContent_left px-4 py-5">
            <div className="col-12 child-col-6 px-2">
              <Link to="/dashboard/mis-operaciones/pending">{t('pending')}</Link>
              <Link to="/dashboard/mis-operaciones/finished">{t('finished')}</Link>
              <Link to="/dashboard/mis-operaciones/canceled">{t('canceled')}</Link>
            </div>
          </div>
        </div>
      </div>
    </AuthCheck>
  );
};

export default Dashboard;