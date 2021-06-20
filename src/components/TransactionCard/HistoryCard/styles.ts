import styled from 'styled-components/native';
import colors from '../../../utils/styles/colors';
import {rh} from '../../../utils/responsive';

interface ContainerProps {
  color: string;
}
export const Container = styled.View<ContainerProps>`
  background-color: ${colors.shape};
  flex-direction: row;
  justify-content: space-between;
  padding: ${rh(13)}px ${rh(24)}px;
  border-radius: ${rh(5)}px;
  border-left-width: ${rh(5)}px;
  border-color: ${({color}) => color};
  margin-bottom: ${rh(8)}px;
`;

export const Title = styled.Text`
  font-size: ${rh(15)}px;
`;

export const Amount = styled.Text`
  font-size: ${rh(15)}px;
  font-weight: bold;
`;
