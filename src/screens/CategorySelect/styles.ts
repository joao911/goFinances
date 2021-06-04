import styled from 'styled-components/native';
import {rh} from '../../utils/responsive';
import colors from '../../utils/styles/colors';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Header = styled.View`
  height: ${rh(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${rh(19)}px;
  background-color: ${colors.primary};
`;

export const Title = styled.Text`
  font-size: ${rh(18)}px;
  color: ${colors.shape};
`;

export const Category = styled.View`
  padding: ${rh(15)}px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: ${rh(1)}px;
  border-color: ${colors.text};
`;

export const Icon = styled(Feather)`
  font-size: ${rh(20)}px;
  margin-right: ${rh(16)}px;
`;

export const Name = styled.Text`
  font-size: ${rh(14)}px;
`;

export const Separator = styled.View`
  height: ${rh(1)}px;
  width: 20px;
  color: red;
`;

export const Footer = styled.View`
  padding: ${rh(24)}px;
`;

export const Teste = styled.View`
  height: 10px;
  background-color: red;
`;
