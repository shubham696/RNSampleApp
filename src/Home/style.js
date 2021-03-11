import {StyleSheet} from 'react-native';
import * as Utils from '../utils';

export default style = StyleSheet.create({
    headerView: {
        height: Utils.setHeight(25), 
        justifyContent: 'center', 
        marginStart:Utils.setWidth(20)
    },
    flatlistView: {
        flex: 1, 
        paddingVertical: Utils.setHeight(10)
    },
    flatlistStyle: {
        flex: 1, 
        marginHorizontal: Utils.setHeight(10) 
    }
})