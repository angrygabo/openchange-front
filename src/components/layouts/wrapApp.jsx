import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Aside from "./Aside";
import Header from "./Header";
import AsideContent from '../AsideContent';
import useLanguageInitialization from '../../hooks/useLanguageInitialization';

const WrapApp = ({ children }) => {
    useLanguageInitialization();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <main className="wrapDashboard">
            {isAuthenticated && <Aside content={<AsideContent />} />}
            <div className="wrapDashboard_content">
                <div className="row">
                    {isAuthenticated && <Header />}
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
};

WrapApp.propTypes = {
    children: PropTypes.node
};

export default WrapApp;