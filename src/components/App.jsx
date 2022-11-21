import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Box } from './Common';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from 'data/friends.json';

export const App = () => {
  return (
    <Box
      width="container"
      px={4}
      pt={5}
      mx="auto"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      gridGap={4}
    >
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Box display="grid" gridGap={6}>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Box>
      <FriendList friends={friends} />
    </Box>
  );
};
