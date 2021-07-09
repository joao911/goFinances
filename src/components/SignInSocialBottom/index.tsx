import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {Container, ImageContainer, Text} from './styles';

interface SignInSocialBottomProps extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}
const SignInSocialBottom: React.FC<SignInSocialBottomProps> = ({
  title,
  svg: Svg,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>
      <Text>{title}</Text>
    </Container>
  );
};

export default SignInSocialBottom;
