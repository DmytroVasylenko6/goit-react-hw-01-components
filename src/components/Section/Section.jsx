
import s from './Section.module.css';

export default function FriendSection({ title, children}) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
}