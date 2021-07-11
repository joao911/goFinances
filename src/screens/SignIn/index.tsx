import React from 'react';
import {useAth} from '../../hooks/auth';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  Footer,
  SignInTitle,
  FooterWrapper,
} from './styles';

import Google from '../../assets/google.svg';
// import Apple from '../../assets/apple.svg';
import Logo from '../../assets/logo.svg';
import {rh, rw} from '../../utils/responsive';
import SignInSocialBottom from '../../components/SignInSocialBottom';

const SignIn: React.FC = () => {
  const {user} = useAth();
  console.log(user);
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
      <Footer>
        <FooterWrapper>
          <SignInSocialBottom title="Entrar com o Google" svg={Google} />
          <SignInSocialBottom title="Entrar com Apple" svg={Google} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
};

export default SignIn;
