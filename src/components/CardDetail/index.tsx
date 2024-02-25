import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {colors} from '../../../assets/styles/Colors';
import {useNavigation} from '@react-navigation/native';

function CardDetail(): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Image
          source={require('../../../assets/images/item_2_a.png')}
          style={styles.thumbnail}
        />
        <View>
          <Text style={[Gs.h2, Gs.textBlack]}>Indoorwork</Text>
          <View style={[Gs.flexRow, Gs.itemsCenter]}>
            <Image
              source={require('../../../assets/icons/star_yellow.png')}
              style={styles.icon}
            />
            <Text style={[Gs.h5, Gs.textBlack]}>4.5/5</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <Text style={[Gs.h4, Gs.textPrimary]}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    ...Gs.cornerLG,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 24,
    borderWidth: 1,
    borderColor: colors.greyContainer,
  },
  leftContent: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
  },
  thumbnail: {
    ...Gs.cornerSM,
    width: 70,
    height: 70,
    marginRight: 12,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
});

export default CardDetail;
