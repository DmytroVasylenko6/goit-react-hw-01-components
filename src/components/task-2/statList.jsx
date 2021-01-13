import StatItem from './statItem';
import PropTypes from 'prop-types';
import s from './statList.module.css';

export default function StatList({ statItems }) {
  return (
    <ul className={s.statList}>
      {statItems.map(statItem => (
        <li
          key={statItem.id}
          className={s.item}
          style={{ backgroundColor: statItem.color }}
        >
          <StatItem label={statItem.label} percentage={statItem.percentage} />
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
