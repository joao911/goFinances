import React from 'react';
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles';
interface Category {
  name: string;
  icon: string;
}
export interface IData {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: Category;
  date: string;
}
export interface TransactionCardProps {
  data: IData;
}

const TransactionCard: React.FC<TransactionCardProps> = ({data}) => {
  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.type === 'positive' && '+ '}
        {data.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
