import styled from 'styled-components';

export const Avatar = styled.img`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[5]}px;
  width: ${({ theme }) => theme.sizes.avatar};
  height: auto;
  border-radius: ${({ theme }) => theme.radii.round};
`;

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.custom};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const ProfileTag = styled.p`
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${p => p.theme.colors.secondColor};
`;

export const Location = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${p => p.theme.colors.secondColor};
`;

export const StatsItem = styled.li`
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.sizes.one};
  border-top: ${({ theme }) => theme.borders.medium};
  border-color: ${({ theme }) => theme.colors.profileBorder};
  background-color: ${p => p.theme.colors.profileBg};

  :not(:last-child) {
    border-right: ${({ theme }) => theme.borders.medium};
    border-color: ${({ theme }) => theme.colors.profileBorder};
  }
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${p => p.theme.colors.secondColor};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const Quantity = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;
