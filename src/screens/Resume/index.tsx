import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Container, Header, Title} from './styles';
import HistoryCard from '../../components/TransactionCard/HistoryCard';

const Resume: React.FC = () => {
  const loadData = async () => {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];
    console.log(loadData);
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <Header>
        <Title>Resumo por categorias</Title>
      </Header>
      <HistoryCard title="Compras" amount="R$ 150,50" color="red" />
    </Container>
  );
};

export default Resume;
