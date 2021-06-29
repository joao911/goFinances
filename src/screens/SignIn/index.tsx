import React from 'react';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  Footer,
  SignInTitle,
} from './styles';

import Apple from '../../assets/apple.svg';
import Google from '../../assets/google.svg';
import Logo from '../../assets/logo.svg';
import {rh, rw} from '../../utils/responsive';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Logo width={rw(120)} height={rh(68)} />
          <Title>
            Controle suas{'\n'} finanças e forma{'\n'} muito simples
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Fça seu login com {'\n'} com uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer />
    </Container>
  );
};

export default SignIn;
