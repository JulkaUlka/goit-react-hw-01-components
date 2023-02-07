import PropTypes from 'prop-types';
import { TransactionTable,TableHead,TableRow,TableData } from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TableHead>
        <TableRow>
          <TableData>Type</TableData>
          <TableData>Amount</TableData>
          <TableData>Currency</TableData>
        </TableRow>
      </TableHead>
      <tbody>
        {items.map(el => (
          <TableRow key={el.id}>
            <TableData>{el.type}</TableData>
            <TableData>{el.amount}</TableData>
            <TableData>{el.currency}</TableData>
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
