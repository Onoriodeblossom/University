// import React, {useState} from 'react';
// import {theme} from '../../infrastructure/theme';
// import {
//   TextInputContainerWrap,
//   TextInputStyled,
//   StyledTextInput,
// } from './Textinput.styles';

// const TextInputContainer = ({
//   borderColor,
//   elevation,
//   searchStores,
//   placeholder = 'Search stores by name',
// }) => {
//   const [value, setValue] = useState(null);

//   // update value with values typed into the search bar component
//   const searchHandler = searchValue => {
//     setValue(searchValue);
//     searchStores(searchValue);
//   };

//   const styledInput = {
//     fontSize: 18,
//     color: theme.colors.black.strong,
//     width: '70%',
//     height: '100%',
//   };

//   return (
//     <TextInputContainerWrap>
//       <TextInputStyled borderColor={borderColor} elevation={elevation}>
//         <StyledTextInput
//           value={value}
//           placeholderTextColor={theme.colors.black.light}
//           style={styledInput}
//           onChangeText={value => searchHandler(value)}
//           autoFocus
//           name="text"
//           placeholder={placeholder}
//         />
//       </TextInputStyled>
//     </TextInputContainerWrap>
//   );
// };

// export default TextInputContainer;
import React from 'react';
import {Text, TextInput} from 'react-native';
import {InputFieldWrapper, InputWrapper, Label, Inputs} from './Textinput.styles';
import {} from 'react-native-vector-icons';

export const InputField = ({label, icon, placeholder}) => {
  return (
    <InputFieldWrapper>
      <Label>{label}</Label>

      <InputWrapper>
        {icon}
        <Inputs placeholder={placeholder} />
      </InputWrapper>
    </InputFieldWrapper>
  );
};
