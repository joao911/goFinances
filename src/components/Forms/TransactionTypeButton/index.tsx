import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Icon, Title} from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};
export interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
}
const TransactionTypeButton: React.FC<TransactionTypeButtonProps> = ({
  title,
  type,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
};

export default TransactionTypeButton;
