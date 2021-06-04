import styled from 'styled-components/native';
import {rh} from '../../../utils/responsive';
import colors from '../../../utils/styles/colors';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${colors.secondary};
  border-radius: ${rh(5)}px;
  align-items: center;
  padding: ${rh(18)}px;
`;

export const Title = styled.Text`
  font-size: ${rh(14)}px;
  color: ${colors.shape};
`;
