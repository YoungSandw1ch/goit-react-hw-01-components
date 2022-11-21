import styled from 'styled-components';

const setBgColor = props =>
  props.isOnline ? props.theme.colors.online : props.theme.colors.ofline;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]}px;
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[3]}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: ${({ theme }) => theme.shadows.friendsShadow};

  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[3]}px;
  }
`;

export const Chip = styled.span`
  background-color: ${setBgColor};
  border-radius: ${({ theme }) => theme.radii.round};
  width: ${({ theme }) => theme.sizes.chip};
  height: ${({ theme }) => theme.sizes.chip};
  display: block;
`;
export const Avatar = styled.img`
  width: ${({ theme }) => theme.sizes.friendsAvatar};
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: ${({ theme }) => theme.colors.lightgrey};
`;
export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.ms};
`;
