import styled, {css} from 'styled-components/native';
import {rh, rw} from '../../utils/responsive';
import colors from '../../utils/styles/colors';
import Feather from 'react-native-vector-icons/Feather';

interface typeProps {
  type: 'up' | 'down' | 'total';
}
export const Container = styled.View<typeProps>`
  background-color: ${props =>
    props.type === 'total' ? colors.secondary : colors.shape};
  width: ${rw(300)}px;
  border-radius: ${rh(5)}px;
  padding: ${rh(19)}px ${rh(23)}px ${rh(42)}px ${rh(23)}px;
  margin-right: ${rh(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled(Feather)<typeProps>`
  font-size: ${rh(40)}px;
  ${props =>
    props.type === 'up' &&
    css`
      color: ${colors.success};
    `};

  ${props =>
    props.type === 'down' &&
    css`
      color: ${colors.attention};
    `};
  ${props =>
    props.type === 'total' &&
    css`
      color: ${colors.shape};
    `};
`;

export const Title = styled.Text<typeProps>`
  font-size: ${rh(14)}px;
  color: ${props =>
    props.type === 'total' ? colors.shape : colors.text_light};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<typeProps>`
  font-size: ${rh(32)}px;
  color: ${props =>
    props.type === 'total' ? colors.shape : colors.text_light};
  margin-top: ${rh(38)}px;
`;

export const LastTransaction = styled.Text<typeProps>`
  font-size: ${rh(12)}px;
  color: ${props => (props.type === 'total' ? colors.shape : colors.text)};
`;
