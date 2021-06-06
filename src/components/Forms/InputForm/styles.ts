import styled from 'styled-components/native';
import colors from '../../../utils/styles/colors';
import {rh} from '../../../utils/responsive';

export const Container = styled.View``;

export const Error = styled.Text`
  color: ${colors.attention};
  font-size: ${rh(14)}px;
  margin: ${rh(7)}px 0px;
`;
