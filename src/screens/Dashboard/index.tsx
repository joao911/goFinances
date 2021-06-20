import React, {useState, useCallback, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';

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
  LoadContainer,
} from './styles';

import HighlightCard from '../../components/HighlightCard';
import TransactionCard, {IData} from '../../components/TransactionCard';
import {rh} from '../../utils/responsive';
import colors from '../../utils/styles/colors';
import {useFocusEffect} from '@react-navigation/core';

interface HighlightProps {
  amount: string;
  lastTransaction: string;
}
interface highlightData {
  entries: HighlightProps;
  expensives: HighlightProps;
  total: HighlightProps;
}
export interface DataListProps extends IData {
  id: number;
}
const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<highlightData>(
    {} as highlightData,
  );
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const getLastTransactionDate = (
    collection: DataListProps[],
    type: 'positive' | 'negative',
  ) => {
    const lasTransaction = new Date(
      Math.max.apply(
        Math,
        collection
          .filter(transaction => transaction.type === type)
          .map(transaction => new Date(transaction.date).getTime()),
      ),
    );
    return `${lasTransaction.getDate()} de ${lasTransaction.toLocaleString(
      'pt-BR',
      {month: 'long'},
    )}`;
  };

  const loadTransaction = async () => {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === 'positive') {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

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
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      },
    );

    const total = entriesTotal - expensiveTotal;
    const lastTransactionEntries = getLastTransactionDate(
      transactions,
      'positive',
    );
    const lastTransactionExpensives = getLastTransactionDate(
      transactions,
      'negative',
    );
    const totalInterval = ` 01 a ${lastTransactionEntries}`;

    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Última entrada dia${lastTransactionEntries}`,
      },
      expensives: {
        amount: expensiveTotal.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Última saída dia ${lastTransactionExpensives}`,
      },
      total: {
        amount: total.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: totalInterval,
      },
    });

    setTransactions(transactionsFormatted);

    setIsLoading(false);
  };

  useEffect(() => {
    loadTransaction();
    // clear date of asyncStorage
    // const dataKey = '@gofinances:transactions';
    // AsyncStorage.removeItem(dataKey);
  }, []);
  useFocusEffect(
    useCallback(() => {
      loadTransaction();
    }, []),
  );
  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <>
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
              amount={highlightData.entries.amount}
              lastTransaction={highlightData.entries.lastTransaction}
              type="up"
            />
            <HighlightCard
              title="Saídas"
              amount={highlightData.expensives.amount}
              lastTransaction={highlightData.expensives.lastTransaction}
              type="down"
            />
            <HighlightCard
              title="Entradas"
              amount={highlightData.total.amount}
              lastTransaction={highlightData.total.lastTransaction}
              type="total"
            />
          </HighlightCards>
          <Transactions>
            <Title>Listagem</Title>
            <TransactionList
              data={transactions}
              renderItem={({item}: any) => <TransactionCard data={item} />}
              keyExtractor={keyExtractor}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
