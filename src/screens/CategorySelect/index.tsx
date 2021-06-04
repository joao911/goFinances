import React from 'react';
import {FlatList} from 'react-native';
import Button from '../../components/Forms/Button';
import {categories} from '../../utils/categories';

import {Container, Header, Title, Category, Icon, Name, Footer} from './styles';

interface ICategory {
  key: string;
  name: string;
}
interface CategorySelectProps {
  category: string;
  setCategory(category: ICategory): void;
  closeSelectCategory: () => void;
}
const CategorySelect: React.FC<CategorySelectProps> = ({
  category,
  setCategory,
  closeSelectCategory,
}) => {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        style={{flex: 1}}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <Category>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
      />
      <Footer>
        <Button title="selecionar" />
      </Footer>
    </Container>
  );
};

export default CategorySelect;
