import React, { PureComponent } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import * as Utils from '../utils';

const TAG = "ErrorScreen"
class ErrorScreen extends PureComponent {

    render() {
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Text>Please comback again having some problem at our end</Text>
            </View>
        )
    }
}

export default ErrorScreen;