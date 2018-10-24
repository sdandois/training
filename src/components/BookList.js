import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux'; 
import axios from 'axios';

import BookItem from './BookItem';
import * as actionCreators from '../actions';

class BookList extends Component {
  componentWillMount() {
    this.props.requestBooks();
  }
  renderItem = ({ item }) => <BookItem book={item} />;
  keyExtractor = ( item ) => item.id.toString();

  render () {
    return (
      <View style = { styles.view } >
        <FlatList 
          data={this.props.books}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = {
  view:{
    flex:1
  }
};

const mapStateToProps = state => ({
  books:state.booksStore.data.map(
    (book) => {
      if (!book.thumbnail) {
        return {...book, thumbnail:require('./img/descarga.jpeg') };
      }
      return {...book, thumbnail:{uri:book.thumbnail}};
    } ),
  status:state.booksStore.status
});

const dispatchToProps = dispatch => ({
  requestBooks : () => {
    dispatch(actionCreators.requestBooksStart());
    axios.get('https://private-af3ad-train5.apiary-mock.com/books0')
      .then(
        (response) => {
          dispatch(actionCreators.requestBooksOk(response.data));
        }
      )
      .catch(
        response => {
          dispatch(actionCreators.requestBooksFail());
        }
      );
  }

});

export default connect( mapStateToProps, dispatchToProps )( BookList );

