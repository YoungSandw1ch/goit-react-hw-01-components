import { Container } from '../Container/Container.styled';
import { Profile } from './Profile/Profile';
import user from '../data/user.json';

export const App = () => {
  return (
    <Container>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
};
