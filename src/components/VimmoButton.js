import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';

const VimmoButton = ({ children, onPressed, height = 36 }) => {
  const { button, buttonText } = styles;

  return (
    <TouchableHighlight style={[button, { height }]} onPress={onPressed}>
      <Text style={buttonText}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: 'white'
  }
});

export default VimmoButton;
