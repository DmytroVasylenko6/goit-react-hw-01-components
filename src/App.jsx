import Profile from './components/task-1/Profile';
import StatisticSection from './components/task-2/statisticSection';
import statData from './components/task-2/statistical-data.json';
import user from './components/task-1/user.json';
import FriendSection from './components/task-3/FriendSection';
import friends from './components/task-3/friends.json';
import transactions from './components/task-4/transactions.json';
import TransactionHistory from './components/task-4/TransactionList';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <StatisticSection title="UPLOAD STATS" stat={statData} />
      <FriendSection title="FRIENDS LIST" friends={friends} />
      <TransactionHistory
        title="История транзакций"
        transactions={transactions}
      />
    </div>
  );
}
