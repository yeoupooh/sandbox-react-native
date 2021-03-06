/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

var MOCKED_MOVIES_DATA = [
    {
        title: 'Title',
        year: '2015',
        posters: {
            thumbnail: 'http://i.imgur.com/UePbdph.jpg'
        }
    }
];

class AwesomeProject extends Component {
    render() {
        var movie = MOCKED_MOVIES_DATA[0];
        console.log('url', movie.posters.thumbnail);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text>
                    {movie.title}
                </Text>
                <Text>
                    {movie.year}
                </Text>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}
                    />
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    thumbnail: {
        width: 53,
        height: 81
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
