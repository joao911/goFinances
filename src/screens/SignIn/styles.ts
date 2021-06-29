import styled from 'styled-components/native';
import {rh} from '../../utils/responsive';
import colors from '../../utils/styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 70%;
  background-color: ${colors.primary};
  justify-content: flex-end;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: ${colors.shape};
  font-size: ${rh(30)}px;
  text-align: center;
  margin-top: ${rh(45)}px;
`;

export const SignInTitle = styled.Text`
  color: ${colors.shape};
  font-size: ${rh(16)}px;
  text-align: center;
  margin-top: ${rh(80)}px;
  margin-bottom: ${rh(67)}px;
`;

export const Footer = styled.View`
  background-color: ${colors.secondary};
  height: 30%;
`;
