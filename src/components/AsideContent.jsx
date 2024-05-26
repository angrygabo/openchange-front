import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectAuth } from '../redux/slices';

// Material icons
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import WalletIcon from '@mui/icons-material/Wallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AsideContent = () => {
    const { t } = useTranslation();
    const location = useLocation();
    //const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const authState = useSelector(selectAuth);
    const { role } = authState;

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <h2 className="wrapDashboard_sidebar--titles">{t('dashboard')}</h2>
            <nav className="wrapDashboard_sidebar--nav">
                <ul>
                {role === 'Operator' ? (
                    <>
                        <li className="current">
                            <div className="position-relative"><HomeIcon fontSize="small" /></div>
                            <Link to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>{t('home')}</Link>
                        </li>
                        <li>
                            <div className="position-relative"><PlaylistAddIcon fontSize="small" /></div>
                            <Link to="/dashboard/nueva-operacion" className={isActive('/') ? 'active' : ''}>{t('newOperation')}</Link>
                        </li>
                        <li>
                            <div className="position-relative"><ChecklistIcon fontSize="small" /></div>
                            <Link to="/dashboard/mis-operaciones" className={isActive('/') ? 'active' : ''}>{t('operations')}</Link>
                        </li>
                    </>
                ) : role === 'user' ? (
                    <>
                        <li className="current">
                            <div className="position-relative"><HomeIcon fontSize="small" /></div>
                            <Link to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>{t('home')}</Link>
                        </li>
                        <li>
                            <div className="position-relative"><PlaylistAddIcon fontSize="small" /></div>
                            <Link to="/dashboard/nueva-operacion" className={isActive('/') ? 'active' : ''}>{t('newOperation')}</Link>
                        </li>
                        <li>
                            <div className="position-relative"><ChecklistIcon fontSize="small" /></div>
                            <Link to="/dashboard/mis-operaciones" className={isActive('/') ? 'active' : ''}>{t('operations')}</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="current">
                            <div className="position-relative"><HomeIcon fontSize="small" /></div>
                            <Link to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>{t('home')}</Link>
                        </li>
                        <li>
                            <div className="position-relative"><PlaylistAddIcon fontSize="small" /></div>
                            <Link to="/dashboard/nueva-operacion" className={isActive('/') ? 'active' : ''}>{t('newOperation')}</Link>
                        </li>
                        <li>
                            <div className="position-relative"><ChecklistIcon fontSize="small" /></div>
                            <Link to="/dashboard/mis-operaciones" className={isActive('/') ? 'active' : ''}>{t('operations')}</Link>
                        </li>
                    </>
                )}
                </ul>
            </nav>
            <h2 className="wrapDashboard_sidebar--titles">{t('myAccount')}</h2>
            <nav className="wrapDashboard_sidebar--nav">
                <ul>
                {role === 'Operator' ? (
                    <>
                        <li>
                            <div className="position-relative alert"><Person2Icon fontSize="small" /></div>
                            <Link to="/dashboard/mi-perfil" className={isActive('/') ? 'active' : ''}>{t('profile')}</Link>
                        </li>
                        <li>
                            <div className="position-relative"><AccountBalanceIcon fontSize="small" /></div>
                            <Link to="/dashboard/mis-bancos" className={isActive('/') ? 'active' : ''}>{t('my_banks_account')}</Link>
                        </li>
                        <li>
                            <div className="position-relative"><WalletIcon fontSize="small" /></div>
                            <Link to="/dashboard/mis-wallets" className={isActive('/') ? 'active' : ''}>{t('wallets')}</Link>
                        </li>
                        <li>
                            <div className="position-relative"><SettingsIcon fontSize="small" /></div>
                            <Link to="/dashboard/settings" className={isActive('/') ? 'active' : ''}>{t('settings')}</Link>
                        </li>
                    </>
                ) : role === 'user' ? (
                    <>
                        <li>
                            <Person2Icon fontSize="small" />
                            <Link to="/dashboard/mi-perfil" className={isActive('/') ? 'active' : ''}>{t('profile')}</Link>
                        </li>
                        <li>
                            <AccountBalanceIcon fontSize="small" />
                            <Link to="/dashboard/mis-bancos" className={isActive('/') ? 'active' : ''}>{t('my_banks_account')}</Link>
                        </li>
                        <li>
                            <WalletIcon fontSize="small" />
                            <Link to="/dashboard/mis-wallets" className={isActive('/') ? 'active' : ''}>{t('wallets')}</Link>
                        </li>
                        <li>
                            <SettingsIcon fontSize="small" />
                            <Link to="/dashboard/settings" className={isActive('/') ? 'active' : ''}>{t('settings')}</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Person2Icon fontSize="small" />
                            <Link to="/dashboard/mi-perfil" className={isActive('/') ? 'active' : ''}>{t('profile')}</Link>
                        </li>
                        <li>
                            <AccountBalanceIcon fontSize="small" />
                            <Link to="/dashboard/mis-bancos" className={isActive('/') ? 'active' : ''}>{t('my_banks_account')}</Link>
                        </li>
                        <li>
                            <WalletIcon fontSize="small" />
                            <Link to="/dashboard/mis-wallets" className={isActive('/') ? 'active' : ''}>{t('wallets')}</Link>
                        </li>
                        <li>
                            <SettingsIcon fontSize="small" />
                            <Link to="/dashboard/settings" className={isActive('/') ? 'active' : ''}>{t('settings')}</Link>
                        </li>
                    </>
                )}
                </ul>
            </nav>
        </>
    );
};

export default AsideContent;