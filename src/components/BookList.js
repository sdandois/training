import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux'; 
import axios from 'axios';

import BookItem from './BookItem';
import * as actionCreators from '../actions';

class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books:[]
    };
  }
  componentWillMount() {
    this.props.requestBooks();
  }
  renderItem( {item} ) {
    console.log(item);
    return ( <BookItem book = { item } /> );
  }

  keyExtractor(item) {
    return item.id.toString();
  }

  render () {
    console.log(this.state.books);
    return (
      <View style = { styles.view } >
        <FlatList 
          data={this.state.books}
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

const mapStateToProps = state => {
};

const dispatchToProps = dispatch => ({
  requestBooks : () => {
    console.log(actionCreators);
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

export default connect( null, dispatchToProps )( BookList );

