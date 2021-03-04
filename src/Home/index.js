import React,{Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import ArticleItem from '../ArticleItem'; 

const TAG = "Home"
class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            articleEntries: [],
            error: false
        }
    }

    componentDidMount = () => {
        fetch("https://cdn.contentful.com/spaces/rt3kkpldvuz8/environments/master/entries?access_token=IkcFOdcUNLz2jTW8_ecjqA0h2FP2IQg42lwOfCugFEE",{
            'method':'GET',
        }).then(res=> res.json())
        .then(response=>{
            this.setState({articleEntries: response.items, loading:false})
        })
        .catch((err)=>{
            this.setState({loading:false,  error: true})
            console.log(TAG,err)
        })
    }



    render(){
        return(
            <View style={{ flex: 1 }}>
                {this.state.loading ? <Text>Loading....</Text>
                    : [this.state.error ? <Text> Please comback again having some problem at our end</Text>
                        :
                        <FlatList
                            style={{flex:1}}
                            extraData={this.state.articleEntries}
                            data={this.state.articleEntries}
                            renderItem={(item, index) => 
                                <ArticleItem item={item.item.fields} />
                            }
                            keyExtractor={(item,index) => `${index}`}
                        />
                    ]}

            </View>
        )
    }
}

export default Home;