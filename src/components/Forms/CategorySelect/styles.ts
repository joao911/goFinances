import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../utils/styles/colors';
import {rh} from '../../../utils/responsive';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.shape};
  border-radius: ${rh(5)}px;
  padding: ${rh(18)}px ${rh(16)}px;
`;

export const Title = styled.Text`
  font-size: ${rh(14)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${rh(20)}px;
  color: ${colors.text};
`;
