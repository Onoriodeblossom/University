import React from 'react';
import {View, Text} from 'react-native';
import {CustomButton} from '../../../components/button/button.component';
import {Container} from '../../../components/container/container.component';
import Email from 'react-native-vector-icons/Fontisto';
import Password from 'react-native-vector-icons/Feather';
import {
  TitleText,
  TitleTextWrapper,
  TitleTextLabel,
  ButtonWrapper,
  ButtonWrapperContainer,
  Flex
} from './/SignIn.styles';
import { InputField } from '../../../components/textInputContainer/TextInput';

export const SignIn = ({navigation}) => {
  return (
    <Container paddingHorizontal={'4%'}>
      <TitleTextWrapper>
        <TitleText>Login</TitleText>
      </TitleTextWrapper>

      <InputField
        label="Email"
        placeholder=" email address"
        icon={
          <View>
            <Email name="email" size={20} />
          </View>
        }
      />

      <InputField
        label="Password"
        placeholder="password"
        icon={
          <View>
            <Password name="lock" size={20} />
          </View>
        }
      />
      <ButtonWrapperContainer>
        <ButtonWrapper>
          <CustomButton
            title="Login"
            onPress={() => navigation.navigate('Home')}
          />
        </ButtonWrapper>
      </ButtonWrapperContainer>
      <Flex>
        <Text>
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
        </Text>
      </Flex>
    </Container>
  );
};
export default SignIn;
