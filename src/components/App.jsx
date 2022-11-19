import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Box } from './Common';
import user from '../data/user.json';
import data from '../data/data.json';

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
    >
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        id={data.id}
        label={data.label}
        percentage={data.percentage}
      />
    </Box>
  );
};
