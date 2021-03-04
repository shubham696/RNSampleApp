import React,{PureComponent} from 'react';
import {View, Text, FlatList} from 'react-native';

const TAG = "ArticleItem"
class ArticleItem extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            articleEntries: []
        }
    }

    componetDidMount = () => {
    }



    render(){
        const {item} = this.props;
        return(
            <View style={{flex:1, marginBottom: 10, padding:20}}>
                <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                <Text>{item.description}</Text>
            </View>
        )
    }
}

export default ArticleItem;