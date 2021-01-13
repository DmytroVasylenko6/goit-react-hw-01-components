import StatList from './statList';
import s from './statisticSection.module.css';

export default function statisticSection({ title, stat }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <StatList statItems={stat} />
    </section>
  );
}
