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
  Flex,
} from './SignUp.styles';
import {InputField} from '../../../components/textInputContainer/TextInput';

export const SignUp = ({navigation}) => {
  return (
    <Container paddingHorizontal={'4%'}>
      <TitleTextWrapper>
        <TitleText>Sign Up</TitleText>
      </TitleTextWrapper>

      <InputField
        label="Firstname"
        placeholder=" email address"
        icon={
          <View>
            <Email name="person" size={20} />
          </View>
        }
      />

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

      <InputField
        label="Confirm Password"
        placeholder="confirm password"
        icon={
          <View>
            <Password name="lock" size={20} />
          </View>
        }
      />
      <ButtonWrapperContainer>
        <ButtonWrapper>
          <CustomButton
            title="SignUp"
            onPress={() => navigation.navigate('Home')}
          />
        </ButtonWrapper>
      </ButtonWrapperContainer>
      <Flex>
        <Text>
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate('SignIn')}>Sign In</Text>
        </Text>
      </Flex>
    </Container>
  );
};
