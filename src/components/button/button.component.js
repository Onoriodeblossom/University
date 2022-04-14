import React, {Children} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import styled from 'styled-components';

export const CustomButton = ({children, onPress, title, ...props}) => {
  return (
    <Button title={title} onPress={onPress} style={styles(props).button}>
      <ButtonText style={styles(props).buttonText}>
        {title ? title : children}
      </ButtonText>
    </Button>
  );
};

const styles = props =>
  StyleSheet.create({
    // button: {
    //   width: "100%",
    //   height: 40,
    //   alignItems: "center",
    //   justifyContent: "center",
    //   display: "flex",
    //   borderRadius: 5,
    //   borderWidth: 1,
    //   backgroundColor: props.backgroundColor
    //     ? props.backgroundColor
    //     : "green"
    // },
    // buttonText: {
    //   color: props.color ? props.color : colors.text.whit
    // }
  });

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  border-width: 0;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#000000'};
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${props => (props.color ? props.color : '#ffffff')};
`;