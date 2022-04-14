// import styled from 'styled-components/native';
// import {colors} from '../../infrastructure/theme/colors';
// import {TextInput} from 'react-native-paper';

// export const TextInputContainerWrap = styled.View`
//   width: 100%;
//   ${'' /* flex-direction: row;
//   align-items: center; */}
// `;

// export const TextInputStyled = styled.View`
//   ${'' /* width: 100%;
//   flex-direction: row;
//   align-items: center; */}
// `;
// ;

// export const StyledTextInput = styled(TextInput)`

// `;
import styled from 'styled-components';

import {Input} from 'react-native';

export const InputFieldWrapper = styled.View`
  width: 100%;
  height: 93px;
  box-shadow: 10px 5px 5px black;
  margin-bottom: 10px;
  padding-bottom: 0px;
`;

export const Label = styled.Text`
  font-weight: 700;
`;

export const InputWrapper = styled.View`
  border-width: 0.5px;
  border-radius: 10px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;
export const Inputs = styled.TextInput`
  border-width: 0px;
  border-radius: 5px;
  width: 90%;
`;
