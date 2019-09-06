import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Article extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Article</Text>
      </View>
    );
  }
}
export default Article;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
