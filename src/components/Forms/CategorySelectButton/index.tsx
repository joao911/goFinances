import React from 'react';

import {Container, Title, Icon} from './styles';

interface CategorySelectProps {
  title: string;
  onPress: () => void;
}
const CategorySelectButton: React.FC<CategorySelectProps> = ({
  title,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelectButton;
