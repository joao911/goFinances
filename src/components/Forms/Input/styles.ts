import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {rh} from '../../../utils/responsive';
import colors from '../../../utils/styles/colors';

export const Container = styled(TextInput)`
  width: 100%;
  padding: ${rh(18)}px;
  font-size: ${rh(14)}px;
  background-color: ${colors.shape};
  border-radius: ${rh(5)}px;
  margin-bottom: ${rh(8)}px;
  color: ${colors.text_light};
`;
