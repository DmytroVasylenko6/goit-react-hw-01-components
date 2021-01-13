import PropTypes from 'prop-types';
import React from 'react';
import s from './FriendListItem.module.css';

export default function FriendListItem({ isOnline, name, avatar }) {
  return (
    <React.Fragment>
      <span
        className={isOnline ? s.green : s.red}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </React.Fragment>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
