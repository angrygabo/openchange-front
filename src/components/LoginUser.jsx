import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../redux/slices';
import { useTranslation } from 'react-i18next';
import { authenticateUser } from '../services/authService';

// Material-ui
import { AccountCircle } from '@mui/icons-material';
import LockIcon from '@mui/icons-material/Lock';

// Animations
import RevealBoxes from './animations/RevealContent';

// TODO - Logo cambista
import logoCambista from '../assets/logo_change2go.png';

const LoginUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccessMessage, setLoginSuccessMessage] = useState('');
  const { t } = useTranslation();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const userInfo = await authenticateUser(username, password);
      dispatch(loginSuccess(userInfo));
      setLoginSuccessMessage('Inicio de sesión exitoso.');
      navigate('/dashboard');
    } catch (error) {
      console.error(error.message);
      setLoginSuccessMessage(error.message);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  RevealBoxes();

  return (
    <div>
      {isAuthenticated ? (
        <div className="container">
          <div className="row flex-row mt-5 ">
            <p>{loginSuccessMessage}</p>
          </div>
        </div>
      ) : (
        <div className="wraperLogin">
          <div className="wraperLogin_box reveal">
              <div className="logo d-flex w-auto">
                <img src={logoCambista} alt="Cambista X" className="logo" />
              </div>
              <div className="wraperLogin_box--loginform mt-3">
                <form onSubmit={handleLogin} id="Login" className='wp-user-form'>
                  <h2 className="my-4 w-full text-center wraperLogin_box--title">Iniciar sesión</h2>
                  <div className="w-full position-relative">
                    <label htmlFor="user_login" className="form-label"><AccountCircle /> {t('username')}:</label>
                    <input type="text" placeholder="Ejemp: correo@tudominio.com" value={username} onChange={(e) => setUsername(e.target.value)} id="user_login" />
                    <div className="w-full position-relative mt-2">
                      <label htmlFor="user_pass" className="form-label"><LockIcon /> {t('password')}:</label>
                      <input type="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} id="user_pass" />
                      <span className="show-password icon-eye"></span>
                    </div>
                    <div className="w-full d-flex justify-content-center error">
                      <div>{loginSuccessMessage}</div>
                    </div>
                    <div className="w-full d-flex justify-content-center">
                      <button type="submit" className="btn btn-gradient mt-2">{t('login')}</button>
                    </div>
                    <hr className="my-4"/>
                    <div className="w-full text-center mt-2">
                      ¿No puedes acceder? Contáctanos
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginUser;