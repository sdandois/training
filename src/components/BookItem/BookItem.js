import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import * as screenNames from '../../constants/screenNames';

import styles from './styles';

class BookItem extends Component {
  navigate = () => {
    this.props.navigation.navigate(screenNames.BookDetail, {
      book: this.props.book
    });
  };

  render() {
    return (
      <TouchableOpacity style={styles.viewContainer} onPress={this.navigate}>
        <Image style={styles.thumbnail} source={this.props.book.thumbnail} />
        <View style={styles.viewLabels}>
          <Text style={styles.titleLabel}>{this.props.book.title}</Text>
          <Text style={styles.authorLabel}>{this.props.book.author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(BookItem);
