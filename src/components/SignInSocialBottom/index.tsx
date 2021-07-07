import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {Container} from './styles';

interface SignInSocialBottomProps extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}
const SignInSocialBottom: React.FC = () => {
  return <Container />;
};

export default SignInSocialBottom;
