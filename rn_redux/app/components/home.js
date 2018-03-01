import React, {
    Components
} from 'react';

import {
    StyleSheet,
    View,
    ListView,
    Text,
    ActivityIndicator
} from 'react-native';

import {
    bindActionCreators
} from 'redux';

import { connect } from 'react-redux';

import * as Actions from '../actions';

class Home extends Components {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            ds: ds
        };

    }

    componentDidMount(){
        this.props.getData(); //call our action
    }

    render() {
        if(this.props.isLoading){
            return(<View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator
                        animating={true}
                        style={[{height: 80}]}
                        size="small"
                    />
            </View>);
        }else{
            return(<View>
                 <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                    <ListView enableEmptySections={true}
                              dataSource={this.state.ds.cloneWithRows(this.props.data)}
                              renderRow={this.renderRow.bind(this)}/>
                </View>
            </View>);
        }    
    }
    
}

// The function takes data from the app current state,
function mapStateToProps(state, props) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
 
    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        // height: 50,
        padding: 10
    },
 
    title:{
        fontSize: 15,
        fontWeight: "600"
    },
 
    description:{
        marginTop: 5,
        fontSize: 14,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);