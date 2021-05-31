import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
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
    </Container>
  );
};

export default Dashboard;
