import FriendList from './FriendList';
import s from './FriendSection.module.css';

export default function FriendSection({ title, friends }) {
  return (
    <section className={s.friends}>
      {title && <h2 className={s.title}>{title}</h2>}
      <FriendList friends={friends} />
    </section>
  );
}
