import * as React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
  buttonStyles?: {
    [property: string]: any;
  };
}

const Button = ({text, onPress, buttonStyles}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, buttonStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a15e1b',
  },
  text: {
    fontSize: 16,
  },
});

export default Button;
