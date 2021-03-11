import React, { PureComponent } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import * as Utils from '../utils';
import styles from './style';

const TAG = "ArticleItem"
class ArticleItem extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            articleEntries: []
        }
    }

    componetDidMount = () => {
    }

    render() {
        const { item } = this.props;
        return (
            <View style={{marginBottom: Utils.setWidth(20)}}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.40 }}>
                        <Image source={{ uri: item.url }} style={styles.imageStyle} resizeMode='contain' />
                    </View>
                    <View style={styles.newsItemStyle}>
                        <Text style={{ fontWeight: 'bold', fontSize: Utils.setFontScale(22) }} ellipsizeMode='tail' numberOfLines={2}>{item.title}{' '}</Text>
                        <Text style={{ fontSize: Utils.setFontScale(18) }} ellipsizeMode='tail' numberOfLines={2}>{item.description}{' '}</Text>
                    </View>
                </View>
                <View style={styles.footerView}>
                    <Text style={{ fontSize: Utils.setFontScale(14), marginEnd: Utils.setWidth(20) }} >18 hours ago{' '}</Text>
                    <Text style={{ fontSize: Utils.setFontScale(14) }}>Local{' '}</Text>
                </View>
            </View>
        )
    }
}

export default ArticleItem;