import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 36,
    paddingTop: 48,
    paddingBottom: 24
  },
  articles: {},
  destinations: {},
  destination: {
    width: width - 36 * 2,
    borderRadius: 12,
    backgroundColor: 'pink',
    marginHorizontal: 36
  },
  recommended: {
    padding: 36
  }
});

class List extends Component {
  static navigationOptions = {
    header: (
      <SafeAreaView>
        <View style={[styles.flex, styles.row, styles.header]}>
          <View>
            <Text> Search for Anything</Text>
            <Text> Destination </Text>
          </View>
          <View>
            <Text></Text>
          </View>
        </View>
      </SafeAreaView>
    )
  };

  renderDestinations = () => {
    return (
      <View style={[styles.flex, styles.column, styles.destinations]}>
        <ScrollView
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          snapToAlignment='center'
          scrollEventThrottle={16}
        >
          <View style={styles.destination}>
            <Text> Destination 1</Text>
          </View>
          <View style={styles.destination}>
            <Text> Destination 2</Text>
          </View>
          <View style={styles.destination}>
            <Text> Destination 3 </Text>
          </View>
        </ScrollView>
      </View>
    );
  };
  renderRecommendations = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <Text> Recommended </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={[styles.flex, styles.articles]}>
        {this.renderDestinations()}
        {this.renderRecommendations()}
      </View>
    );
  }
}
export default List;
