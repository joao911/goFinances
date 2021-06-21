import styled from 'styled-components/native';
import {rh} from '../../utils/responsive';
import colors from '../../utils/styles/colors';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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

export const MonthSelect = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${rh(24)}px;
`;

export const MonthSelectButton = styled.TouchableOpacity``;

export const MonthSelectIcon = styled(Feather)`
  font-size: ${24}px;
`;

export const Previous = styled.View``;

export const Month = styled.Text`
  font-size: ${20}px;
`;

export const ChartContainer = styled.View`
  align-items: center;
`;

export const Content = styled.ScrollView``;
