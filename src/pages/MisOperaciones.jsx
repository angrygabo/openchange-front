import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AuthCheck from '../hooks/AuthCheck';
import RevealBoxes from '../components/animations/RevealContent';

const MyOperations = () => {
  const { t } = useTranslation();

  RevealBoxes();

  const transactions  = [
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
      "fecha_operacion": "2024-05-25",
      "status": "finished"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(5);
  const [filterStatus, setFilterStatus] = useState('pending'); // Estado para almacenar el filtro

  const filteredTransactions = filterStatus 
    ? transactions.filter(transaction => transaction.status === filterStatus) 
    : transactions;

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const pageCount = Math.ceil(filteredTransactions.length / transactionsPerPage);

  const handleFilterChange = (status) => {
    setCurrentPage(1);
    setFilterStatus(status);
  };

  return (
    <AuthCheck>
      <h2 className="wrapDashboard_header--heading mt-3">{t('newOperation')}</h2>
      <div className="bodyContent reveal">
        <div className="row px-4 py-5">
          <div className="w-100">
            <div className="col-12">
              <button className="mr-2" onClick={() => handleFilterChange('')}>{t('all')}</button>
              <button className="mr-2" onClick={() => handleFilterChange('pending')}>{t('pending')}</button>
              <button className="mr-2" onClick={() => handleFilterChange('finished')}>{t('finished')}</button>
              <button className="mr-2" onClick={() => handleFilterChange('canceled')}>{t('canceled')}</button>
            </div>
            <hr className="my-4"/>
            <table className="w-100 text-left">
              <thead>
                <tr>
                  <th>{t('client')}</th>
                  <th>{t('originAmount')}</th>
                  <th>{t('destinationAmount')}</th>
                  <th>{t('operationDate')}</th>
                  <th>{t('status')}</th>
                </tr>
              </thead>
              <tbody>
                {currentTransactions.map(transaction => (
                  <tr key={transaction.id_operacion}>
                    <td>{transaction.cliente}</td>
                    <td>${transaction.monto_origen}</td>
                    <td>${transaction.monto_destino} ARS</td>
                    <td>{transaction.fecha_operacion}</td>
                    <td className={transaction.status}><span>{t(transaction.status)}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr className="my-4"/>
          <div className="col-12">
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
    </AuthCheck>
  );
};

export default MyOperations;