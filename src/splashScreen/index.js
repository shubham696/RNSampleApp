import React, { PureComponent } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import * as Utils from '../utils';

const TAG = "SplashScreen"
class SplashScreen extends PureComponent {

    render() {
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Text>Please wait Loading...</Text>
                <ActivityIndicator size={'large'} color='black' />
            </View>
        )
    }
}

export default SplashScreen;