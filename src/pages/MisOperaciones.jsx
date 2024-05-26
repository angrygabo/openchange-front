import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AuthCheck from '../hooks/AuthCheck';
import RevealBoxes from '../components/animations/RevealContent';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const MyOperations = () => {
  const { t } = useTranslation();
  RevealBoxes();

  const transactions = [
    {
      "id_operacion": 1,
      "monto_origen": 100,
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
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(5);
  const [filterStatus, setFilterStatus] = useState('pending');
  const [searchEmail, setSearchEmail] = useState('');
  const [tempYear, setTempYear] = useState('');
  const [tempMonth, setTempMonth] = useState('');
  const [tempDay, setTempDay] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const resetFilters = () => {
    setFilterStatus('');
    setSearchEmail('');
    setYear('');
    setMonth('');
    setDay('');
    setCurrentPage(1);
  };

  const applyFilters = () => {
    setYear(tempYear);
    setMonth(tempMonth);
    setDay(tempDay);
    setCurrentPage(1);
  };

  const filteredTransactions = transactions.filter(transaction => {
    const transactionDate = new Date(transaction.fecha_operacion);
    const matchesYear = year ? transactionDate.getFullYear() === parseInt(year) : true;
    const matchesMonth = month ? transactionDate.getMonth() + 1 === parseInt(month) : true;
    const matchesDay = day ? transactionDate.getDate() === parseInt(day) : true;
    return matchesYear && matchesMonth && matchesDay &&
           (filterStatus ? transaction.status === filterStatus : true) &&
           (searchEmail ? transaction.cliente.includes(searchEmail) : true);
  });

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
            <div className="col-12 mr-2 justify-content-end">
              <button className={`mr-2 ${filterStatus === '' ? 'active' : ''}`} onClick={() => handleFilterChange('')}>{t('all')}</button>
              <button className={`mr-2 ${filterStatus === 'pending' ? 'active' : ''}`} onClick={() => handleFilterChange('pending')}>{t('pending')}</button>
              <button className={`mr-2 ${filterStatus === 'finished' ? 'active' : ''}`} onClick={() => handleFilterChange('finished')}>{t('finished')}</button>
              <button className={`mr-2 ${filterStatus === 'canceled' ? 'active' : ''}`} onClick={() => handleFilterChange('canceled')}>{t('canceled')}</button>
            </div>
            <div className='col-12 child-col-3 child-spacing-1'> 
              <TextField
                select
                label={t('Year')}
                value={tempYear}
                onChange={(event) => setTempYear(event.target.value)}
                fullWidth
                margin="normal"
                size='small'
              >
                {Array.from({ length: 10 }).map((_, index) => (
                  <MenuItem key={index} value={2024 - index}>
                    {2024 - index}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label={t('Month')}
                value={tempMonth}
                onChange={(event) => setTempMonth(event.target.value)}
                fullWidth
                margin="normal"
                size='small'
              >
                {Array.from({ length: 12 }).map((_, index) => (
                  <MenuItem key={index} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label={t('Day')}
                value={tempDay}
                onChange={(event) => setTempDay(event.target.value)}
                fullWidth
                margin="normal"
                size='small'
              >
                {Array.from({ length: 31 }).map((_, index) => (
                  <MenuItem key={index} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label={t('BuscarPorEmail')}
                variant="outlined"
                value={searchEmail}
                onChange={handleSearchChange}
                fullWidth
                margin="normal"
                placeholder={t('searchByEmail')}
                size='small'
              />
            </div>
            <div className='col-12'>
              <button onClick={resetFilters} style={{marginLeft: '10px'}}>{t('ResetFilter')}</button>
              <button onClick={applyFilters} style={{marginLeft: '10px'}}>{t('ApplyFilters')}</button>
            </div>
            <hr className="my-4"/>
            <table className="w-100 text-left">
              <thead>
                <tr>
                  <th>{t('client')}</th>
                  <th>{t('originAmount')}</th>
                  <th>{t('destinationAmount')}</th>
                  <th>{t('operationDate')}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentTransactions.length > 0 ? (
                  currentTransactions.map(transaction => (
                    <tr key={transaction.id_operacion}>
                      <td>{transaction.cliente}</td>
                      <td>${transaction.monto_origen}</td>
                      <td>${transaction.monto_destino} ARS</td>
                      <td>{transaction.fecha_operacion}</td>
                      <td className={`text-right ${transaction.status}`}><span>{t(transaction.status)}</span></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center pt-5">{t('noResults')}</td>
                  </tr>
                )}
              </tbody>
            </table>
            <hr className="my-4"/>
            <div className="col-12 mx-2">
              {Array.from({ length: pageCount }, (_, i) => (
                <button
                  className="mr-2"
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  disabled={currentPage === i + 1}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AuthCheck>
  );
};

export default MyOperations;
