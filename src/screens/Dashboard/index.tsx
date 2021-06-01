import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import HighlightCard from '../../components/HighlightCard';
import TransactionCard from '../../components/TransactionCard';
import {rh} from '../../utils/responsive';
import colors from '../../utils/styles/colors';

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
} from './styles';

const Dashboard: React.FC = () => {
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
        <TransactionCard />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
