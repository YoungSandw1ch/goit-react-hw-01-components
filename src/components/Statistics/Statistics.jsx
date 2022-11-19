// import PropTypes from 'prop-types';
import { Box } from 'components/Common';
import { Heading } from 'components/Common';

export const Statistics = ({ id, label, percentage, title }) => {
  return (
    <Box
      height="three"
      width="three"
      bg="white"
      overflow="hidden"
      borderRadius="normal"
      boxShadow="greyShadow"
      mr={4}
    >
      {title && (
        <Heading as="h1" variant="primary" my={5}>
          {title}
        </Heading>
      )}
    </Box>
  );
};
