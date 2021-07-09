import styled from 'styled-components/native';
import {rh} from '../../utils/responsive';
import colors from '../../utils/styles/colors';

export const Container = styled.TouchableOpacity`
  height: ${rh(56)}px;
  background-color: ${colors.shape};
  align-items: center;
  flex-direction: row;
  margin-bottom: ${rh(16)}px;
  border-radius: ${rh(6)}px;
`;

export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: ${rh(16)}px;
  border-color: ${colors.background};
  border-right-width: 1px;
`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;
  font-size: ${rh(14)}px;
`;
