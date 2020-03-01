import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

function Quote(props) {
  return (
    <View>
      <Text>{props.quote}</Text>
    </View>
  );
}

export default Quote;
