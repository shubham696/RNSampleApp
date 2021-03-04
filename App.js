/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/Home';
import {View, Text, FlatList} from 'react-native';


class App extends React.Component {
  render(){
    return(
      <View style={{flex:1}}>
        <Home/>
      </View>
    )
  }
};

export default App;
