import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, selectLanguage } from '../redux/slices';
import { useTranslation } from 'react-i18next';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectLanguage);
  const { i18n, t } = useTranslation();

  const changeLanguage = (event) => {
    const language = event.target.value;
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
  };

  return (
    <div className="header_menu--langPicker_selector">
      <FormControl variant="outlined" size="small">
        <InputLabel id="language-select-label">{t('languaje')}</InputLabel>
        <Select
          labelId="language-select-label"
          value={currentLanguage}
          onChange={changeLanguage}
          label={t('Idioma')}
          MenuProps={{ disableScrollLock: true }}
        >
          <MenuItem value="en">Eng</MenuItem>
          <MenuItem value="es">Esp</MenuItem>
          <MenuItem value="pt">Port</MenuItem>
        </Select>
      </FormControl>
      <p>
        {t('languaje')}: <span className="text-uppercase"><b>{currentLanguage}</b></span>
      </p>
    </div>
  );
};

export default LanguageSwitcher;