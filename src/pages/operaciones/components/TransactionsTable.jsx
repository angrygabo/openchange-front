import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { updateTransactionStatus } from '../../../redux/slices';

const TransactionsTable = ({ transactions, t }) => {
  const [open, setOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  const handleOpen = (transaction) => {
    setSelectedTransaction(transaction);
    setStatus(transaction.status);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    setSelectedTransaction({ ...selectedTransaction, status: newStatus });

    // Despachar la acción para actualizar el estado en Redux
    dispatch(updateTransactionStatus({ id_operacion: selectedTransaction.id_operacion, status: newStatus }));
  };

  return (
    <>
      <table className="w-100 text-left table-striped">
        <thead>
          <tr>
            <th>{t('client')}</th>
            <th>{t('operationDate')}</th>
            <th className="hidden-md-down">{t('originAmount')}</th>
            <th className="hidden-md-down">{t('destinationAmount')}</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <tr key={transaction.id_operacion}>
                <td>{transaction.cliente}</td>
                <td>{transaction.fecha_operacion}</td>
                <td className="hidden-md-down">${transaction.monto_origen}</td>
                <td className="hidden-md-down">${transaction.monto_destino} ARS</td>
                <td className={`text-right ${transaction.status}`}>
                  <span>{t(transaction.status)}</span>
                </td>
                <td className="text-right">
                  <VisibilityIcon
                    size="small"
                    className="svgBtn"
                    onClick={() => handleOpen(transaction)}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center pt-5 w-100 bg-white">
                {t('noResults')}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transaction-modal-title"
        aria-describedby="transaction-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="transaction-modal-title" variant="h6" component="h2">
            {t('transactionDetails')}
          </Typography>
          {selectedTransaction && (
            <Box id="transaction-modal-description" sx={{ mt: 2 }}>
              <Typography>{`${t('client')}: ${selectedTransaction.cliente}`}</Typography>
              <Typography>{`${t('operationDate')}: ${selectedTransaction.fecha_operacion}`}</Typography>
              <Typography>{`${t('originAmount')}: $${selectedTransaction.monto_origen}`}</Typography>
              <Typography>{`${t('destinationAmount')}: $${selectedTransaction.monto_destino} ARS`}</Typography>
              <Typography>{`${t('status')}:`}</Typography>
              <Select
                value={status}
                onChange={handleStatusChange}
                fullWidth
              >
                <MenuItem value="pending">{t('pending')}</MenuItem>
                <MenuItem value="finished">{t('finished')}</MenuItem>
                <MenuItem value="canceled">{t('canceled')}</MenuItem>
              </Select>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

TransactionsTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id_operacion: PropTypes.number.isRequired,
      cliente: PropTypes.string.isRequired,
      monto_origen: PropTypes.number.isRequired,
      monto_destino: PropTypes.number.isRequired,
      fecha_operacion: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  t: PropTypes.func.isRequired,
};

export default TransactionsTable;