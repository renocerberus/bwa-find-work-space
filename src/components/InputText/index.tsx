import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import { Gs } from '../../../assets/styles/GlobalStyle';
import { colors } from '../../../assets/styles/Colors';

interface InputTextProps {
  icon?: any;
  label?: string;
  placeholder: string;
}

function InputText({icon, label, placeholder}: InputTextProps): JSX.Element {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.searchContainer}>
        {icon && <Image source={icon} style={styles.iconContainer} />}
        <TextInput placeholder={placeholder} style={styles.searchInput} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.cornerXL,
    borderWidth: 1,
    borderColor: colors.greyContainer,
    paddingHorizontal: 20,
  },
  searchInput: {
    marginLeft: 10,
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
  label: {
    ...Gs.h4,
    ...Gs.textBlack,
    marginTop: 16,
    marginBottom: 4,
  },
});

export default InputText;
