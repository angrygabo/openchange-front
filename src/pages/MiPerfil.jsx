import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectAuth } from '../redux/slices';
import AuthCheck from '../hooks/AuthCheck';
import { TextField, Button, FormControl } from '@mui/material';
import RevealBoxes from '../components/animations/RevealContent';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

const Dashboard = () => {
  const { t } = useTranslation();

  const authState = useSelector(selectAuth);
  const { sub } = authState;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí lógica de envío del formulario
    console.log("Form submitted");
  };

  RevealBoxes();
  
  return (
    <AuthCheck>
      <h2 className="wrapDashboard_header--heading mt-3">{t('profile')}</h2>
      <div className="bodyContent reveal">
        <div className="row">
          <div className="col bodyContent_left px-4 py-5">
          <div className="col-12 px-2">
               <span className="mr-2">{t('email')}</span> <span><b>{sub}</b></span>
            </div>
            <div className="col-12 px-2 py-3 ">
              <blockquote className="w-100 px-3 py-3 blockquote warning">{t('Por medidas de seguridad, la dirección de email asociada a esta cuenta no podrá ser cambiada. Si deseas modificarla contacta con nosotros directamente.')}</blockquote>
            </div>
            <hr className="my-4 mx-2"/>
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                  <div className="child-col-6 child-spacing-1">
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      size="small"
                      id="firstName"
                      label={t('firstName')}
                      name="firstName"
                      autoComplete="given-name"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      size="small"
                      id="lastName"
                      label={t('lastName')}
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </div>
                  <div className="child-col-12 px-2 child-spacing-1">   
                    <TextField
                      margin="normal"
                      fullWidth
                      size="small"
                      id="phoneNumber"
                      label={t('phoneNumber')}
                      name="phoneNumber"
                      autoComplete="tel"
                      type="tel"
                    />
                  </div>
                  <div className="child-col-12 child-spacing-1">
                    <Button
                      type="submit"
                      //variant="contained"
                      //sx={{ mt: 3, mb: 2 }}
                      className="btn btn-gradient ml-2 mt-2"
                    >
                      {t('submit')}
                    </Button>
                  </div>
                </FormControl>
              </form>
            </div>
          </div>
          <div className="bodyContent_right px-4 py-5"> 
            <div className="bodyContent_right--infoIcon">
              <LiveHelpIcon/>
            </div>
            {t('infoPerfil')}
          </div>
        </div>
      </div>
    </AuthCheck>
  );
};

export default Dashboard;
