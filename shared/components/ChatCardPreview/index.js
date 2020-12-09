import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import CheckBox from '@react-native-community/checkbox';
export default class ChatCardPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      //font1 or 2 can be any name. This'll be used in font-family
      font1: require('../../../assets/fonts/Poppins-Regular.ttf'),
      font2: require('../../../assets/fonts/Poppins-Bold.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  stripLongString = (text) => {
    const textLimit = 30;
    return text
      .substring(0, textLimit)
      .concat(text.length > textLimit ? '...' : '');
  };

  render() {
    const { name, messagePreview, date, time, profileUrl, read } = this.props;
    // if (this.state.fontsLoaded) {
    return (
      <View style={styles.listItems}>
        <View style={styles.listItem}>
          <View style={{ flex: 0.2 }}>
            <CheckBox
              value={false}
              //onValueChange={}
              style={styles.checkbox}
            />
          </View>
          <View>
            <ImageBackground
              source={{
                uri: profileUrl,
              }}
              style={[styles.userProfilePic]}
              imageStyle={{ borderRadius: 20 }}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Text style={read == true ? styles.boldText : styles.regText}>
              {name}
            </Text>
            <Text style={styles.regText}>
              {this.stripLongString(messagePreview)}
            </Text>
          </View>
          <View
            style={{ display: 'flex', alignItems: 'flex-start', width: 80 }}
          >
            <Text style={read == true ? styles.boldText : styles.regText}>
              {date}
            </Text>
            <Text style={styles.regText}>{time}</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={30} />
        </View>
      </View>
    );
    // }
  }
}

const styles = StyleSheet.create({
  checkbox: {
    //backgroundColor: 'cyan',
    width: 100,
    height: 100,
  },
  listItems: {
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#fafafa',
    borderBottomWidth: 1,
  },
  userProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  boldText: {
    fontFamily: 'font2',
  },
  regText: {
    fontFamily: 'font1',
    color: '#777',
  },
});
