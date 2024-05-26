
import { useTranslation } from 'react-i18next';
import AuthCheck from '../hooks/AuthCheck';
import RevealBoxes from '../components/animations/RevealContent';

const Operation = () => {

  const { t } = useTranslation();
  RevealBoxes();
  return (
    <AuthCheck>
      <div className="bodyContent reveal">
        <h2 className="bodyContent_heading">{t('newOperation')}</h2>
      </div>
    </AuthCheck>
  );
};

export default Operation;