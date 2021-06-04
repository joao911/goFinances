import styled from 'styled-components/native';
import {rh} from '../../utils/responsive';
import colors from '../../utils/styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Header = styled.View`
  background-color: ${colors.primary};
  height: ${rh(133)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${rh(19)}px;
`;

export const Title = styled.Text`
  color: ${colors.shape};
  font-size: ${rh(18)}px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${rh(24)}px;
`;

export const Fields = styled.View``;

export const TransactionsTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${rh(8)}px 0px ${rh(16)}px 0px;
`;
