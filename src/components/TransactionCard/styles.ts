import styled from 'styled-components/native';
import colors from '../../utils/styles/colors';
import Feather from 'react-native-vector-icons/Feather';
import {rh} from '../../utils/responsive';

export const Container = styled.View`
  background-color: ${colors.shape};
  border-radius: ${rh(5)}px;
  padding: ${rh(17)}px ${rh(24)}px;
  margin-top: ${rh(19)}px;
`;

export const Title = styled.Text`
  font-size: ${rh(14)}px;
  margin-top: ${rh(16)}px;
  align-items: center;
  margin-top: ${rh(19)}px;
`;

export const Amount = styled.Text`
  font-size: ${rh(20)}px;
  margin-top: ${rh(2)}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${rh(19)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${rh(20)}px;
  color: ${colors.text};
`;

export const CategoryName = styled.Text`
  font-size: ${rh(14)}px;
  color: ${colors.text};
  margin-left: ${rh(17)}px;
`;

export const Date = styled.Text`
  font-size: ${rh(14)}px;
  color: ${colors.text};
`;
