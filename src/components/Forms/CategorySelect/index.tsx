import React from 'react';

import {Container, Title, Icon} from './styles';
interface CategorySelectProps {
  title: string;
}
const CategorySelect: React.FC<CategorySelectProps> = ({title}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelect;
