import { Profile } from './Profile/Profile';
import { Box } from './Box/Box.styled';
import user from '../data/user.json';

export const App = () => {
  return (
    <Box width="container" px={4} pt={5} mx="auto">
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Box>
  );
};
