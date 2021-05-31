import styled from 'styled-components/native';
import {rh, rw} from '../../utils/responsive';
import colors from '../../utils/styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Header = styled.View`
  background-color: ${colors.primary};
  height: ${rh(278)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const UserContainer = styled.View`
  width: 100%;
  padding: 0px ${rh(24)}px 0px ${rh(24)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${rw(48)}px;
  height: ${rh(48)}px;
  border-radius: ${rh(5)}px;
`;

export const User = styled.View`
  margin-left: ${rh(17)}px;
`;

export const UserGreeting = styled.Text`
  color: ${colors.shape};
  font-size: ${rh(18)}px;
`;

export const UserName = styled.Text`
  color: ${colors.shape};
  font-size: ${rh(18)}px;
  font-weight: bold;
`;
