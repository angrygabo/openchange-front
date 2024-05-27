import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AuthCheck from '../../hooks/AuthCheck';
import RevealBoxes from '../../components/animations/RevealContent';
import TextField from '@mui/material/TextField';
import TransactionsTable from './components/TransactionsTable';

const MyOperations = () => {
  const { t } = useTranslation();
  RevealBoxes();

  const transactions = [
    {
      "id_operacion": 1, "monto_origen": 100,
      "monto_destino": 15000,
      "cliente": "cliente1@email.com",
      "fecha_operacion": "2024-05-25",
      "status": "pending"
    },
    {
      "id_operacion": 2,
      "monto_origen": 200,
      "monto_destino": 30000,
      "cliente": "cliente2@email.com",
      "fecha_operacion": "2024-05-25",
      "status": "finished"
    },
    {
      "id_operacion": 3,
      "monto_origen": 300,
      "monto_destino": 45000,
      "cliente": "cliente3@email.com",
      "fecha_operacion": "2024-05-25",
      "status": "canceled"
    },
    {
      "id_operacion": 4,
      "monto_origen": 400,
      "monto_destino": 60000,
      "cliente": "cliente4@email.com",
      "fecha_operacion": "2024-05-25",
      "status": "finished"
    },
    {
      "id_operacion": 5,
      "monto_origen": 500,
      "monto_destino": 75000,
      "cliente": "cliente5@email.com",
      "fecha_operacion": "2024-05-25",
      "status": "pending"
    },
    {
      "id_operacion": 6,
      "monto_origen": 600,
      "monto_destino": 90000,
      "cliente": "cliente6@email.com",
      "fecha_operacion": "2024-05-25",
      "status": "finished"
    },
    {
      "id_operacion": 7,
      "monto_origen": 700,
      "monto_destino": 105000,
      "cliente": "cliente7@email.com",
      "fecha_operacion": "2024-05-25",
      "status": "canceled"
    },
    {
      "id_operacion": 8,
      "monto_origen": 800,
      "monto_destino": 120000,
      "cliente": "cliente8@email.com",
      "fecha_operacion": "2024-05-25",
      "status": "finished"
    },
    {
      "id_operacion": 9,
      "monto_origen": 900,
      "monto_destino": 135000,
      "cliente": "cliente9@email.com",
      "fecha_operacion": "2024-05-25",
      "status": "pending"
    },
    {
      "id_operacion": 10,
      "monto_origen": 1000,
      "monto_destino": 150000,
      "cliente": "cliente10@email.com",
      "fecha_operacion": "2022-01-02",
      "status": "finished"
    },
    {"id_operacion": 11, "monto_origen": 1100, "monto_destino": 165000, "cliente": "cliente11@email.com", "fecha_operacion": "2024-05-25", "status": "pending"},
  {"id_operacion": 12, "monto_origen": 1200, "monto_destino": 180000, "cliente": "cliente12@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 13, "monto_origen": 1300, "monto_destino": 195000, "cliente": "cliente13@email.com", "fecha_operacion": "2024-05-25", "status": "canceled"},
  {"id_operacion": 14, "monto_origen": 1400, "monto_destino": 210000, "cliente": "cliente14@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 15, "monto_origen": 1500, "monto_destino": 225000, "cliente": "cliente15@email.com", "fecha_operacion": "2024-05-25", "status": "pending"},
  {"id_operacion": 16, "monto_origen": 1600, "monto_destino": 240000, "cliente": "cliente16@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 17, "monto_origen": 1700, "monto_destino": 255000, "cliente": "cliente17@email.com", "fecha_operacion": "2024-05-25", "status": "canceled"},
  {"id_operacion": 18, "monto_origen": 1800, "monto_destino": 270000, "cliente": "cliente18@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 19, "monto_origen": 1900, "monto_destino": 285000, "cliente": "cliente19@email.com", "fecha_operacion": "2024-05-25", "status": "pending"},
  {"id_operacion": 20, "monto_origen": 2000, "monto_destino": 300000, "cliente": "cliente20@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 21, "monto_origen": 2100, "monto_destino": 315000, "cliente": "cliente21@email.com", "fecha_operacion": "2024-05-25", "status": "canceled"},
  {"id_operacion": 22, "monto_origen": 2200, "monto_destino": 330000, "cliente": "cliente22@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 23, "monto_origen": 2300, "monto_destino": 345000, "cliente": "cliente23@email.com", "fecha_operacion": "2024-05-25", "status": "pending"},
  {"id_operacion": 24, "monto_origen": 2400, "monto_destino": 360000, "cliente": "cliente24@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 25, "monto_origen": 2500, "monto_destino": 375000, "cliente": "cliente25@email.com", "fecha_operacion": "2024-05-25", "status": "canceled"},
  {"id_operacion": 26, "monto_origen": 2600, "monto_destino": 390000, "cliente": "cliente26@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 27, "monto_origen": 2700, "monto_destino": 405000, "cliente": "cliente27@email.com", "fecha_operacion": "2024-05-25", "status": "pending"},
  {"id_operacion": 28, "monto_origen": 2800, "monto_destino": 420000, "cliente": "cliente28@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 29, "monto_origen": 2900, "monto_destino": 435000, "cliente": "cliente29@email.com", "fecha_operacion": "2024-05-25", "status": "canceled"},
  {"id_operacion": 30, "monto_origen": 3000, "monto_destino": 450000, "cliente": "cliente30@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 31, "monto_origen": 3100, "monto_destino": 465000, "cliente": "cliente31@email.com", "fecha_operacion": "2024-05-25", "status": "pending"},
  {"id_operacion": 32, "monto_origen": 3200, "monto_destino": 480000, "cliente": "cliente32@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 33, "monto_origen": 3300, "monto_destino": 495000, "cliente": "cliente33@email.com", "fecha_operacion": "2024-05-25", "status": "canceled"},
  {"id_operacion": 34, "monto_origen": 3400, "monto_destino": 510000, "cliente": "cliente34@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 35, "monto_origen": 3500, "monto_destino": 525000, "cliente": "cliente35@email.com", "fecha_operacion": "2024-05-25", "status": "pending"},
  {"id_operacion": 36, "monto_origen": 3600, "monto_destino": 540000, "cliente": "cliente36@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 37, "monto_origen": 3700, "monto_destino": 555000, "cliente": "cliente37@email.com", "fecha_operacion": "2024-05-25", "status": "canceled"},
  {"id_operacion": 38, "monto_origen": 3800, "monto_destino": 570000, "cliente": "cliente38@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 39, "monto_origen": 3900, "monto_destino": 585000, "cliente": "cliente39@email.com", "fecha_operacion": "2024-05-25", "status": "pending"},
  {"id_operacion": 40, "monto_origen": 4000, "monto_destino": 600000, "cliente": "cliente40@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 41, "monto_origen": 4100, "monto_destino": 615000, "cliente": "cliente41@email.com", "fecha_operacion": "2024-05-25", "status": "canceled"},
  {"id_operacion": 42, "monto_origen": 4200, "monto_destino": 630000, "cliente": "cliente42@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 43, "monto_origen": 4300, "monto_destino": 645000, "cliente": "cliente43@email.com", "fecha_operacion": "2024-05-25", "status": "pending"},
  {"id_operacion": 44, "monto_origen": 4400, "monto_destino": 660000, "cliente": "cliente44@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 45, "monto_origen": 4500, "monto_destino": 675000, "cliente": "cliente45@email.com", "fecha_operacion": "2024-05-25", "status": "canceled"},
  {"id_operacion": 46, "monto_origen": 4600, "monto_destino": 690000, "cliente": "cliente46@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 47, "monto_origen": 4700, "monto_destino": 705000, "cliente": "cliente47@email.com", "fecha_operacion": "2024-05-25", "status": "pending"},
  {"id_operacion": 48, "monto_origen": 4800, "monto_destino": 720000, "cliente": "cliente48@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 49, "monto_origen": 4900, "monto_destino": 735000, "cliente": "cliente49@email.com", "fecha_operacion": "2024-05-25", "status": "canceled"},
  {"id_operacion": 50, "monto_origen": 5000, "monto_destino": 750000, "cliente": "cliente50@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 51, "monto_origen": 5100, "monto_destino": 765000, "cliente": "cliente51@email.com", "fecha_operacion": "2024-05-25", "status": "pending"},
  {"id_operacion": 52, "monto_origen": 5200, "monto_destino": 780000, "cliente": "cliente52@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
  {"id_operacion": 53, "monto_origen": 5300, "monto_destino": 795000, "cliente": "cliente53@email.com", "fecha_operacion": "2024-05-25", "status": "canceled"},
  {"id_operacion": 54, "monto_origen": 5400, "monto_destino": 810000, "cliente": "cliente54@email.com", "fecha_operacion": "2024-05-25", "status": "finished"},
];

  const { status } = useParams(); 

  useEffect(() => {
    setFilterStatus(status || 'pending');
  }, [status]);

  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(15);
  const [filterStatus, setFilterStatus] = useState(status);
  const [searchEmail, setSearchEmail] = useState('');


  const filteredTransactions = transactions.filter(transaction => (
    (!filterStatus || transaction.status === filterStatus) &&
    (!searchEmail || transaction.cliente.includes(searchEmail))
  ));

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const pageCount = Math.ceil(filteredTransactions.length / transactionsPerPage);

  const handleFilterChange = (status) => {
    setCurrentPage(1);
    setFilterStatus(status);
  };

  const handleSearchChange = (event) => {
    setCurrentPage(1);
    setSearchEmail(event.target.value);
  };

  return (
    <AuthCheck>
      <h2 className="wrapDashboard_header--heading mt-3">{t('newOperation')}</h2>
      <div className="bodyContent reveal">
        <div className="row px-4 py-5">
          <div className="row">
            <div className="col-12 child-col-6 align-content-center">
              <div className="d-flex align-content-center">
                <button className={`mr-2 ${filterStatus === '' ? 'active' : ''}`} onClick={() => handleFilterChange('')}>{t('all')}</button>
                <button className={`mr-2 ${filterStatus === 'pending' ? 'active' : ''}`} onClick={() => handleFilterChange('pending')}>{t('pending')}</button>
                <button className={`mr-2 ${filterStatus === 'finished' ? 'active' : ''}`} onClick={() => handleFilterChange('finished')}>{t('finished')}</button>
                <button className={`mr-2 ${filterStatus === 'canceled' ? 'active' : ''}`} onClick={() => handleFilterChange('canceled')}>{t('canceled')}</button>
              </div>
              <div className="d-flex align-content-center">
                <TextField
                  label={t('BuscarPorEmail')}
                  variant="outlined"
                  value={searchEmail}
                  onChange={handleSearchChange}
                  fullWidth
                  margin="normal"
                  placeholder={t('searchByEmail')}
                  size='small'
                  className="m-0"
                />
              </div>
            </div>
            <hr className="my-4"/>
            <TransactionsTable transactions={currentTransactions} t={t}/>
            <hr className="my-4"/>
            <div className="col-12 mx-2">
            {Array.from({ length: pageCount }, (_, i) => (
                (pageCount > 1) && (
                  <button
                    className={`mr-2 ${currentPage === i + 1 ? 'active' : ''}`}
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                  >
                    {i + 1}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </AuthCheck>
  );
};

TransactionsTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id_operacion: PropTypes.number.isRequired,
    cliente: PropTypes.string.isRequired,
    monto_origen: PropTypes.number.isRequired,
    monto_destino: PropTypes.number.isRequired,
    fecha_operacion: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  })).isRequired,
  t: PropTypes.func.isRequired
};

export default MyOperations;
