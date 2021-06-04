import styled, {css} from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {rh} from '../../../utils/responsive';
import colors from '../../../utils/styles/colors';
interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}
export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1.5px solid ${colors.text};
  border-radius: ${rh(5)}px;
  padding: ${rh(16)}px;
  ${props =>
    props.isActive &&
    props.type === 'up' &&
    css`
      background-color: ${colors.success_light};
      border: none;
    `}
  ${props =>
    props.isActive &&
    props.type === 'down' &&
    css`
      background-color: ${colors.attention_light};
      border: none;
    `}
`;
interface IconProps {
  type: 'up' | 'down';
}
export const Icon = styled(Feather)<IconProps>`
  font-size: ${rh(24)}px;
  margin-right: ${rh(12)}px;
  color: ${props => (props.type === 'up' ? colors.success : colors.attention)};
`;

export const Title = styled.Text`
  font-size: ${rh(14)}px;
`;
