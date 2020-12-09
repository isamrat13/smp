import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ChatCardPreview from '../../shared/components/ChatCardPreview';
import FloatingButton from '../../shared/components/FloatingButton';
export default class SMP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      customerName: 'Sarvesh',
      customerProfilePhoto: 'N.A',
      searching: false,
      searchKey: '',
      /* Once the data is fetched to display under inbox, the below data set can to switched to remote data set*/
      data: [
        {
          name: 'Andrew Perry',
          message: 'This is a test',
          date: 'Fri Sep 19',
          time: '1:00 pm',
          profileUrl:
            'https://source.unsplash.com/collection/522965' /* Using a public api from unsplash to get random images */,
          read: true,
        },
        {
          name: 'Patrick Batemann',
          message: 'This is a very long text message.',
          date: 'Mon Sep 14',
          time: '12:23 pm',
          profileUrl: 'https://source.unsplash.com/collection/522965',
          read: false,
        },
        {
          name: 'Alex Hales',
          message: 'Order id - #123234',
          date: 'Mon Sep 14',
          time: '11:00pm',
          profileUrl: 'https://source.unsplash.com/collection/522965',
          read: false,
        },
        {
          name: 'James',
          message: 'Test 2',
          date: 'Fri Sep 11',
          time: '9:00 am',
          profileUrl: 'https://source.unsplash.com/collection/522965',
          read: true,
        },
        {
          name: 'Enrique',
          message: 'Bye',
          date: 'Fri Sep 11',
          time: '11:00 am',
          profileUrl: 'https://source.unsplash.com/collection/522965',
          read: true,
        },
      ],
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      //font1 or 2 can be any name. This'll be used in font-family
      font1: require('../../assets/fonts/Poppins-Regular.ttf'),
      font2: require('../../assets/fonts/Poppins-Bold.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }
  render() {
    const { data, fontsLoaded } = this.state;
    if (fontsLoaded) {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.locationContainer}>
              <View style={styles.iconIndicator}>
                <MaterialCommunityIcons name="menu" color={'#777'} size={25} />
                <Text style={styles.text}>&nbsp; {this.state.loaction}</Text>
              </View>
              <View style={styles.logoContainer}>
                <Text
                  style={{
                    fontFamily: 'font2',
                    color: '#45A9E1',
                    fontSize: 20,
                  }}
                >
                  INBOX
                </Text>
              </View>
              <TouchableOpacity style={styles.changeLocationButton}>
                <MaterialCommunityIcons name="image" color={'#777'} size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.searchArea}>
              <CheckBox
                value={false}
                //onValueChange={}
                style={styles.checkbox}
              />
              <View style={styles.searchBarContainer}>
                <MaterialCommunityIcons
                  name="magnify"
                  color={'#000'}
                  size={25}
                />
                <TextInput style={styles.searchBar}></TextInput>
                <MaterialCommunityIcons name="close" color={'#000'} size={25} />
              </View>
              <MaterialCommunityIcons name="sort" color={'#000'} size={25} />
            </View>
          </View>
          {data.map((value, index) => {
            return (
              <ChatCardPreview
                name={value.name}
                messagePreview={value.message}
                date={value.date}
                time={value.time}
                profileUrl={value.profileUrl}
                read={value.read}
              />
            );
          })}
          <FloatingButton
            iconName={'comment-plus'}
            iconColor={'white'}
            iconSize={35}
            //Can pass onPressAction to call
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:
      Platform.OS == 'ios'
        ? Constants.statusBarHeight
        : Constants.statusBarHeight,
  },
  text: {
    fontFamily: 'font1',
  },
  activityText: {
    color: '#367FFA',
    fontSize: 10,
  },
  header: {
    backgroundColor: '#eeeeee',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomColor: '#45A9E1',
    borderBottomWidth: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconIndicator: {
    flexDirection: 'row',
  },
  logoContainer: {
    alignSelf: 'center',
  },
  changeLocationButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  body: {
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    borderColor: '#d7d7d7',
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderRadius: 4,
  },
  searchArea: {
    borderBottomColor: '#fafafa',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  searchBar: {
    padding: 5,
    width: wp(60),
  },
});
