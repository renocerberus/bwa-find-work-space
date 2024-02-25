import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../assets/styles/Colors';
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {useNavigation} from '@react-navigation/native';

function Details(): JSX.Element {
  const navigation = useNavigation();
  const slider = [
    require('../../../assets/images/item_2_a.png'),
    require('../../../assets/images/item_2_b.png'),
    require('../../../assets/images/item_2_c.png'),
  ];

  const renderSlider = () => {
    return (
      <FlatList
        data={slider}
        keyExtractor={({index}) => index}
        renderItem={({item}) => <SliderItem image={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.sliderContainer}
      />
    );
  };

  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <View>
          <Text style={[Gs.textBlack, Gs.h1]}>Homemade Office</Text>
          <Text style={Gs.textGrey}>Jalan Angga Bekerja No. 10</Text>
        </View>
        <View style={Gs.flexRow}>
          <Image source={require('../../../assets/icons/star_yellow.png')} />
          <Text style={[Gs.textBlack, Gs.h3]}>4.5/5</Text>
        </View>
      </View>
    );
  };

  const renderDescription = () => {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={[Gs.textBlack, Gs.h3, styles.title]}>About</Text>
        <Text style={Gs.textGrey}>
          Lorem space curated dolor si amet deep work without distraction from
          any edge si solor. Fiesto si fast charging club and go-getter Internet
          zonn absurb prixomoti anneheil available today.
        </Text>
      </View>
    );
  };

  const renderOwner = () => {
    return (
      <View style={styles.ownerContainer}>
        <Text style={[Gs.textBlack, Gs.h3, styles.title]}>Space Owner</Text>
        <View style={[Gs.flexRow, Gs.itemsCenter]}>
          <Image
            source={require('../../../assets/images/profile_2.png')}
            style={styles.ownerImage}
          />
          <View>
            <View style={Gs.flexRow}>
              <Text>Junebug</Text>
              <Image
                source={require('../../../assets/icons/verified_orange.png')}
                style={styles.icon}
              />
            </View>
            <Text style={[Gs.font700, Gs.textBlack]}>@junebug</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBookingButton = () => {
    return (
      <View style={styles.bookingButtonContainer}>
        <View>
          <Text style={[Gs.textPrimary, Gs.h1]}>$5,899</Text>
          <Text style={Gs.textGrey}>/day</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Booking');
          }}>
          <Text style={[Gs.textWhite, Gs.h3]}>Start Booking</Text>
          <Image
            source={require('../../../assets/icons/arrow_right_white.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title="Office Details"
        subtitle="Space available for today"
        showRightButton
      />
      <ScrollView nestedScrollEnabled>
        {renderSlider()}
        {renderTitle()}
        {renderDescription()}
        {renderOwner()}
      </ScrollView>
      {renderBookingButton()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sliderContainer: {
    paddingHorizontal: 24,
  },
  titleContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    marginTop: 24,
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 10,
  },
  descriptionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  ownerContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  ownerImage: {
    marginRight: 12,
  },
  icon: {
    marginLeft: 4,
  },
  bookingButtonContainer: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    padding: 24,
  },
  button: {
    ...Gs.flexRow,
    ...Gs.cornerMD,
    paddingHorizontal: 22,
    paddingVertical: 14,
    backgroundColor: colors.primary,
  },
});

export default Details;
