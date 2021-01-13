import PropTypes from 'prop-types';
import TransactionItem from '../TransactionItem/TransactionItem';
import React from 'react';
import s from './TransactionList.module.css';

export default function TransactionList({ transactions }) {
  return (
    <React.Fragment>
      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th className={s.title}>Type</th>
            <th className={s.title}>Amount</th>
            <th className={s.title}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id.toString()} className={s.item}>
              <TransactionItem
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
