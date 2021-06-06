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
  category: ICategory;
  setCategory(category: ICategory): void;
  closeSelectCategory: () => void;
}
const CategorySelect: React.FC<CategorySelectProps> = ({
  category,
  setCategory,
  closeSelectCategory,
}) => {
  const handleSelectCategory = (category: ICategory) => {
    setCategory(category);
  };
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
          <Category
            onPress={() => handleSelectCategory(item)}
            isActive={category.key === item.key}>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
      />
      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
};

export default CategorySelect;
