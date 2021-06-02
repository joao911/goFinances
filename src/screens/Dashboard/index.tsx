import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  Container,
  Header,
  UserInfo,
  Photo,
  UserGreeting,
  UserName,
  User,
  UserContainer,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

import HighlightCard from '../../components/HighlightCard';
import TransactionCard, {IData} from '../../components/TransactionCard';
import {rh} from '../../utils/responsive';
import colors from '../../utils/styles/colors';
export interface DataListProps extends IData {
  id: number;
}
const Dashboard: React.FC = () => {
  const data: DataListProps[] = [
    {
      id: 1,
      type: 'positive',
      title: 'desenvolvimento de sites',
      amount: 'R$ 12.000,00',
      date: '04/01/1991',
      category: {name: 'Vendas', icon: 'dollar-sign'},
    },
    {
      id: 2,

      type: 'negative',
      title: 'Ifood',
      amount: 'R$ 12.000,00',
      date: '04/01/1991',
      category: {name: 'Transporte', icon: 'coffee'},
    },
    {
      id: 3,

      type: 'negative',
      title: 'Internet',
      amount: 'R$ 12.000,00',
      date: '04/01/1991',
      category: {name: 'Despesas', icon: 'shopping-bag'},
    },
  ];
  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/49724031?s=400&u=44f72f50d74716c141048ac65ba5027c1621430d&v=4',
              }}
            />
            <User>
              <UserGreeting> Olá,</UserGreeting>
              <UserName>João</UserName>
            </User>
          </UserInfo>
          <Feather name="power" color={colors.secondary} size={rh(24)} />
        </UserContainer>
      </Header>
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="ùltima transação 13 de abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="ùltima saída 13 de abril"
          type="down"
        />
        <HighlightCard
          title="Entradas"
          amount="R$ 16.141,00"
          lastTransaction="1 a 13 de abril"
          type="total"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          renderItem={({item}: any) => <TransactionCard data={item} />}
          keyExtractor={(item: any) => item.id.toString()}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
