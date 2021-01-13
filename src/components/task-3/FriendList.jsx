import PropTypes from 'prop-types';
import FriendItem from './FriendListItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id.toString()} className={s.item}>
          <FriendItem
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
