import React, {useState} from 'react';
import {Modal, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from './styles';

import {InputForm} from '../../components/Forms/InputForm';
import Button from '../../components/Forms/Button';
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton';
import CategorySelectButton from '../../components/Forms/CategorySelectButton';
import CategorySelect from '../CategorySelect';
import {useNavigation} from '@react-navigation/native';

interface IData {
  name: string;
  amount: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  amount: yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório'),
});
const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState('');
  const [showModalCategory, setShowModalCategory] = useState(false);
  const dataKey = '@gofinances:transactions';
  const navigation = useNavigation();

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type);
  };

  const handleCloseSelectCategory = () => {
    setShowModalCategory(false);
  };

  const handleRegister = async (form: IData) => {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo de transação');
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria');
    }
    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newTransaction];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
      reset();
      setTransactionType('');
      setCategory({
        key: 'category',
        name: 'Categoria',
      });
      navigation.navigate('Listagem');
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível cadastrar');
    }
    console.log(newTransaction);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="amount"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

            <TransactionsTypes>
              <TransactionTypeButton
                type="up"
                title="Income"
                isActive={transactionType === 'up'}
                onPress={() => handleTransactionTypeSelect('up')}
              />
              <TransactionTypeButton
                type="down"
                title="Outcome"
                isActive={transactionType === 'down'}
                onPress={() => handleTransactionTypeSelect('down')}
              />
            </TransactionsTypes>
            <CategorySelectButton
              title={category.name}
              onPress={() => setShowModalCategory(true)}
            />
          </Fields>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>
        <Modal visible={showModalCategory}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategory}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Register;
