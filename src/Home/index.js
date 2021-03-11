import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ArticleItem from '../ArticleItem';
import SplashScreen from '../splashScreen';
import ErrorScreen from '../errorScreen';
import * as Utils from '../utils';
import styles from './style';

const TAG = "Home"
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            articleEntries: [],
            error: false
        }
    }

    componentDidMount = () => {
        fetch("https://cdn.contentful.com/spaces/rt3kkpldvuz8/environments/master/entries?access_token=IkcFOdcUNLz2jTW8_ecjqA0h2FP2IQg42lwOfCugFEE", {
            'method': 'GET',
        }).then(res => res.json())
            .then(response => {
                this.setState({ articleEntries: response.items, loading: false })
            })
            .catch((err) => {
                this.setState({ loading: false, error: true })
                console.log(TAG, err)
            })
    }

    showDivider = () => {
        return (
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
        )
    }



    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.state.loading ? <SplashScreen />
                    : [this.state.error ? <ErrorScreen />
                        :
                        <View style={{ flex: 1 }}>
                            <View style={styles.headerView}>
                                <Text style={{fontSize: Utils.setFontScale(24)}}>News</Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <View style={styles.flatlistView}>
                                <FlatList
                                    style={styles.flatlistStyle}
                                    extraData={this.state.articleEntries}
                                    data={this.state.articleEntries}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={(item, index) =>
                                        <ArticleItem item={item.item.fields} />
                                    }
                                    ItemSeparatorComponent={this.showDivider}
                                    ListFooterComponent={this.showDivider}
                                    keyExtractor={(item, index) => `${index}`}
                                />
                            </View>
                        </View>
                    ]}

            </View>
        )
    }
}

export default Home;