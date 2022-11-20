// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { Box } from 'components/Common';
import { Heading } from 'components/Common';
import { ListItem, Label, Percentage } from './Statistics.styled';
import { getRandomColor } from 'utils';

export const Statistics = ({ stats, title }) => {
  return (
    <Box
      width="four"
      bg="white"
      overflow="hidden"
      borderRadius="normal"
      boxShadow="greyShadow"
    >
      {title && (
        <Heading as="h1" variant="primary" my={5}>
          {title}
        </Heading>
      )}

      <Box as="ul" display="flex" height="statistic">
        {stats.map(stat => {
          let color = getRandomColor();
          return (
            <ListItem key={stat.id} style={{ backgroundColor: color }}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </ListItem>
          );
        })}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
