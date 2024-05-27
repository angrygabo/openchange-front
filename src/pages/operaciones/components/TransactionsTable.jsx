import PropTypes from 'prop-types';

const TransactionsTable = ({ transactions, t }) => (
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
      {transactions.length > 0 ? (
        transactions.map(transaction => (
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
);

TransactionsTable.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
      id_operacion: PropTypes.string.isRequired,
      cliente: PropTypes.string.isRequired,
      monto_origen: PropTypes.number.isRequired,
      monto_destino: PropTypes.number.isRequired,
      fecha_operacion: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })).isRequired,
    t: PropTypes.func.isRequired
  };

export default TransactionsTable;