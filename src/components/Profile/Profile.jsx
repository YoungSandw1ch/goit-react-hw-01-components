import PropTypes from 'prop-types';
import { Box } from 'components/Common';
import {
  Avatar,
  UserName,
  ProfileTag,
  Location,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Box
      bg="white"
      overflow="hidden"
      width="three"
      borderRadius="normal"
      boxShadow="greyShadow"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px={3}
        py={5}
      >
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{userName}</UserName>
        <ProfileTag>@{tag}</ProfileTag>
        <Location>{location}</Location>
      </Box>

      <Box as="ul" display="flex">
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
