import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actionCreators from '../../../actions';
import * as statusCodes from '../../../reducers/constants';
import BookItem from '../BookItem/BookItem';
import { Spinner } from '../../../common/';

import ErrorComponent from './ErrorComponent';
import bookImage from './img/descarga.jpeg';
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

  render() {
    if (this.props.status === statusCodes.STATUS_WAIT) {
      return <Spinner />;
    }
    if (this.props.status === statusCodes.STATUS_OK) {
      return <this.List />;
    }
    return <ErrorComponent onPress={this.props.requestBooks} />;
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
