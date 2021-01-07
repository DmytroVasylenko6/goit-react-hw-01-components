import PropTypes from 'prop-types';
import React from 'react';
import s from './statItem.module.css';

export default function StatItem({ label, percentage }) {
  return (
    <React.Fragment>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </React.Fragment>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
