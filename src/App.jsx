import Profile from './components/Profile/Profile';
import StatList from './components/Statistic/StatList/StatList';
import FriendList from './components/FriendList/FriendList/FriendList';
import TransactionHistory from './components/TransactionList/TransactionList/TransactionList';
import Section from './components/Section/Section'

import statData from './db/statistical-data.json';
import user from './db/user.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';


export default function App() {
  return (
    <>
      <Section>
          <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        />
      </Section>

      <Section title="UPLOAD STATS">
        <StatList statItems={statData} />
      </Section>

      <Section title="FRIENDS LIST">
          <FriendList friends={friends} />
      </Section>

      <Section title="Transaction history">
            <TransactionHistory transactions={transactions}/>
      </Section>
    
    </>
  );
}
