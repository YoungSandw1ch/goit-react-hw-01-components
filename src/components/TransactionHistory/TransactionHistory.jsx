import PropTypes from 'prop-types';
import { Box } from 'components/Common';
import {
  Table,
  DataCell,
  TableHeader,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Box as="thead">
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </Box>

      <Box as="tbody">
        {items.map(item => (
          <TableRow key={item.id}>
            <DataCell>{item.type}</DataCell>
            <DataCell>{item.amount}</DataCell>
            <DataCell>{item.currency}</DataCell>
          </TableRow>
        ))}
      </Box>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
