import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actionCreators from '../actions';

import styles from './styles/bookList';
import BookItem from './BookItem';

class BookList extends Component {
  componentWillMount() {
    this.props.requestBooks();
  }

  keyExtractor = item => item.id.toString();
  renderItem = ({ item }) => <BookItem book={item} />;

  render() {
    return (
      <View style={styles.view}>
        <FlatList data={this.props.books} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  books: state.booksStore.data.map(book => {
    if (!book.thumbnail) {
      return { ...book, thumbnail: require('./img/descarga.jpeg') };
    }
    return { ...book, thumbnail: { uri: book.thumbnail } };
  }),
  status: state.booksStore.status
});

const dispatchToProps = dispatch => ({
  requestBooks: () => {
    dispatch(actionCreators.requestBooksStart());
    axios
      .get('https://private-af3ad-train5.apiary-mock.com/books0')
      .then(response => {
        dispatch(actionCreators.requestBooksOk(response.data));
      })
      .catch(() => {
        dispatch(actionCreators.requestBooksFail());
        console.log('Error Loading Books');
      });
  }
});

export default connect(
  mapStateToProps,
  dispatchToProps
)(BookList);
