import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../assets/styles/Colors';
import Header from '../../components/Header';
import CardDetail from '../../components/CardDetail';
import {Gs} from '../../../assets/styles/GlobalStyle';
import InputText from '../../components/InputText';
import {useNavigation} from '@react-navigation/native';

function Booking(): JSX.Element {
  const navigation = useNavigation();
  const forms = [
    {
      label: 'Total days',
      placeholder: 'Total days',
      icon: require('../../../assets/icons/days.png'),
    },
    {
      label: 'Date start at',
      placeholder: 'Date start at',
      icon: require('../../../assets/icons/calendar.png'),
    },
    {
      label: 'Complete name',
      placeholder: 'Complete name',
      icon: require('../../../assets/icons/user.png'),
    },
    {
      label: 'Phone number',
      placeholder: 'Phone number',
      icon: require('../../../assets/icons/phone.png'),
    },
  ];

  const renderBookingDetail = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Space</Text>
        <CardDetail />
      </View>
    );
  };

  const renderBookingInformation = () => {
    return (
      <View style={styles.section}>
        <Text style={[Gs.h3, Gs.textBlack]}>Booking Informations</Text>
        <Text style={Gs.textGrey}>Lorem ensure data valid cant change</Text>
        {forms.map((val, idx) => {
          return (
            <InputText
              key={idx}
              label={val.label}
              placeholder={val.placeholder}
              icon={val.icon}
            />
          );
        })}
      </View>
    );
  };

  const renderProceedPayment = () => {
    return (
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => {
            navigation.navigate('Checkout');
          }}>
          <Text style={[Gs.h4, Gs.textWhite]}>Proceed to Payment</Text>
          <Image
            source={require('../../../assets/icons/arrow_right_white.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.termsConditionButton}>
          <Text>Read Terms & All Conditions</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Booking" subtitle="Space available for today" />
      <View>
        <ScrollView>
          {renderBookingDetail()}
          {renderBookingInformation()}
        </ScrollView>
        {renderProceedPayment()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sectionTitle: {
    ...Gs.h3,
    ...Gs.textBlack,
    marginBottom: 12,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  proceedButton: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerMD,
    backgroundColor: colors.primary,
    padding: 14,
  },
  icon: {
    marginLeft: 4,
  },
  termsConditionButton: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    padding: 14,
  },
});

export default Booking;
