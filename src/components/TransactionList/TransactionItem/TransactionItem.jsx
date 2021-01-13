import PropTypes from 'prop-types';
import React from 'react';
import s from './TransactionItem.module.css';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <React.Fragment>
      <td className={s.text}>{type.slice(0, 1).toUpperCase() + type.slice(1)}</td>
      <td className={s.text}>{amount}</td>
      <td className={s.text}>{currency}</td>
    </React.Fragment>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
