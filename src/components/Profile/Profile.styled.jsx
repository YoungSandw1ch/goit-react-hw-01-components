import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  width: 350px;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 3px 3px 1px ${props => props.theme.colors.profileShadow},
    -3px 3px 1px ${props => props.theme.colors.profileShadow};
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing(10, 5)};
`;

export const Avatar = styled.img`
  display: block;
  margin-bottom: ${props => props.theme.spacing(10)};
  width: 160px;
  height: auto;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const ProfileTag = styled.p`
  margin-bottom: ${props => props.theme.spacing(2)};
  font-size: 18px;
  color: ${props => props.theme.colors.secondColor};
`;

export const Location = styled.p`
  font-size: 18px;
  color: ${props => props.theme.colors.secondColor};
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
  border-top: 2px solid ${props => props.theme.colors.profileBorder};
  background-color: ${props => props.theme.colors.profileBg};

  :not(:last-child) {
    border-right: 2px solid ${props => props.theme.colors.profileBorder};
  }
`;

export const Label = styled.span`
  font-size: 16px;
  color: ${props => props.theme.colors.secondColor};
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
