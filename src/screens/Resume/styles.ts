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

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {flex: 1, padding: rh(24)},
})``;
