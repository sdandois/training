import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actionCreators from '../../actions';
import * as statusCodes from '../../reducers/constants';
import bookImage from '../img/descarga.jpeg';
import BookItem from '../BookItem/BookItem';
import { Spinner } from '../common';

import styles from './styles';

class BookList extends Component {
  componentDidMount() {
    this.props.requestBooks();
  }

  keyExtractor = item => item.id.toString();
  renderItem = ({ item }) => <BookItem book={item} />;

  List = () => (
    <View style={styles.view}>
      <FlatList data={this.props.books} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
    </View>
  );

  ErrorComponent = () => (
    <View style={styles.centered}>
      <Text style={styles.label}>Connection Error </Text>
    </View>
  );

  render() {
    if (this.props.status === statusCodes.STATUS_WAIT) {
      return <Spinner />;
    }
    if (this.props.status === statusCodes.STATUS_OK) {
      return <this.List />;
    }
    return <this.ErrorComponent />;
  }
}

const mapStateToProps = state => ({
  books: state.booksStore.data.map(book => {
    if (!book.thumbnail) {
      return { ...book, thumbnail: bookImage };
    }
    return { ...book, thumbnail: { uri: book.thumbnail } };
  }),
  status: state.booksStore.status
});

const dispatchToProps = dispatch => ({
  requestBooks: () => {
    dispatch(actionCreators.requestBooks());
    axios
      .get('https://private-af3ad-train5.apiary-mock.com/books0')
      .then(response => {
        dispatch(actionCreators.requestBooksSuccess(response.data));
      })
      .catch(() => {
        dispatch(actionCreators.requestBooksFailure());
      });
  }
});

export default connect(
  mapStateToProps,
  dispatchToProps
)(BookList);
