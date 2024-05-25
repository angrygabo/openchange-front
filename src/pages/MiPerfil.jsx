import { useTranslation } from 'react-i18next';
import AuthCheck from '../hooks/AuthCheck';
import { TextField, Button, FormControl } from '@mui/material';


const Dashboard = () => {
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí manejas la lógica de envío del formulario, como enviar datos a un servidor
    console.log("Form submitted");
  };

  return (
    <AuthCheck>
      <div className="bodyContent">
        <h2 className="bodyContent_heading">{t('profile')}</h2>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <div className="child-col-6 child-spacing-2">
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
              <div className="child-col-6 child-spacing-2">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  size="small"
                  id="email"
                  label={t('email')}
                  name="email"
                  autoComplete="email"
                  type="email"
                />
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
              <div className="child-col-12 child-spacing-2">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {t('submit')}
                </Button>
              </div>
            </FormControl>
          </form>
        </div>
      </div>
    </AuthCheck>
  );
};

export default Dashboard;
