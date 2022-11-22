import styled from 'styled-components';
import data from 'data/data.json';

export const ListItem = styled.li`
  flex-basis: calc(100% / ${data.length});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]}px;
  color: ${({ theme }) => theme.colors.secondWhite};
  transition: flex-basis 300ms linear;

  :hover {
    flex-basis: 100%;
  }
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
export const Percentage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.ms};
`;
