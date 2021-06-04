import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Title} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}
const Button: React.FC<ButtonProps> = ({title, ...props}) => {
  return (
    <Container {...props}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
