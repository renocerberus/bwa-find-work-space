import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {colors} from '../../../assets/styles/Colors';

interface NewsworthyItemProps {
  title: string;
  address: string;
  price: string;
  image: any;
  onPress: () => void;
}

function NewsworthyItem({
  title,
  address,
  price,
  image,
  onPress,
}: NewsworthyItemProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageBackground} />
      <View style={styles.contentContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View>
          <Text style={[Gs.h2, Gs.textWhite]}>{title}</Text>
          <Text style={[Gs.font400, Gs.textWhite]}>{address}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress();
        }}>
        <Image
          source={require('../../../assets/icons/arrow_right_white.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 40,
    marginBottom: 24,
  },
  imageBackground: {
    ...Gs.cornerXL,
    width: 240,
    height: 320,
    position: 'relative',
  },
  contentContainer: {
    ...Gs.justifyBetween,
    ...Gs.cornerXL,
    backgroundColor: colors.transparentBlack,
    position: 'absolute',
    width: 240,
    height: 320,
    padding: 20,
  },
  priceContainer: {
    ...Gs.cornerXS,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: colors.secondary,
    alignSelf: 'flex-end',
  },
  price: {
    ...Gs.textPrimary,
    ...Gs.font600,
  },
  button: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 40,
    zIndex: 2,
    bottom: 24,
    right: -20,
  },
});

export default NewsworthyItem;
