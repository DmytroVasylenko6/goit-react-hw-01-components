import StatItem from '../StatItem/StatItem';
import PropTypes from 'prop-types';
import s from './StatList.module.css';

export default function StatList({ statItems }) {
  return (
    <ul className={s.statList}>
      {statItems.map(({ id, label, percentage, color })  => (
        <li
          key={id}
          className={s.item}
          style={{ backgroundColor: color }}
        >
          <StatItem label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  );
}

StatList.propTypes = {
  statItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
