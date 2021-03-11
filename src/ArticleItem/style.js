import {StyleSheet} from 'react-native';
import * as Utils from '../utils';

export default style = StyleSheet.create({
    imageStyle: {
        borderRadius: Utils.setWidth(80),  
        width: Utils.setWidth(160), 
        height: Utils.setHeight(60)
    },
    newsItemStyle: {
        alignSelf: 'center', 
        marginStart: Utils.setWidth(10), flex: 0.60 
    },
    footerView: {
        justifyContent:'flex-end', 
        flexDirection:'row' 
    }
})