import styled from 'styled-components';

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.space[5]}px ${({ theme }) => theme.space[4]}px;
`;

export const Avatar = styled.img`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[5]}px;
  width: 160px;
  height: auto;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const ProfileTag = styled.p`
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  font-size: 18px;
  color: ${p => p.theme.colors.secondColor};
`;

export const Location = styled.p`
  font-size: 18px;
  color: ${p => p.theme.colors.secondColor};
`;

export const ProfileStats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

export const StatsItem = styled.li`
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-top: 2px solid ${p => p.theme.colors.profileBorder};
  background-color: ${p => p.theme.colors.profileBg};

  :not(:last-child) {
    border-right: 2px solid ${p => p.theme.colors.profileBorder};
  }
`;

export const Label = styled.span`
  font-size: 16px;
  color: ${p => p.theme.colors.secondColor};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
