import React, {useState, useCallback} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  Logout,
} from './styles';

import HighlightCard from '../../components/HighlightCard';
import TransactionCard, {IData} from '../../components/TransactionCard';
import {rh} from '../../utils/responsive';
import colors from '../../utils/styles/colors';
import {useFocusEffect} from '@react-navigation/core';
export interface DataListProps extends IData {
  id: number;
}
const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataListProps[]>([]);
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const loadTransaction = async () => {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];
    console.log('data', dataKey);
    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));
        return {
          // id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      },
    );

    setData(transactionsFormatted);
  };

  useFocusEffect(
    useCallback(() => {
      loadTransaction();
    }, []),
  );
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
          <Logout onPress={() => {}}>
            <Feather name="power" color={colors.secondary} size={rh(24)} />
          </Logout>
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
          keyExtractor={keyExtractor}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
