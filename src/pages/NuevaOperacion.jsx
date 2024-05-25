
import { useTranslation } from 'react-i18next';
import AuthCheck from '../hooks/AuthCheck';

const Dashboard = () => {

  const { t } = useTranslation();

  return (
    <AuthCheck>
      <div className="bodyContent">
        <h2 className="bodyContent_heading">{t('newOperation')}</h2>
      </div>
    </AuthCheck>
  );
};

export default Dashboard;