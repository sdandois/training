import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux'; 

import BookItem from './BookItem';

import axios from 'axios';

class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books:[]
    };
  }
  componentWillMount() {
    axios.get('https://private-af3ad-train5.apiary-mock.com/books0').then(
      response => {
        this.setState(
          {
            books:response.data
          }
        );
      }
    );
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
          data = { this.state.books }
          renderItem = { this.renderItem }
          keyExtractor = { this.keyExtractor }
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
  const hardCoredLib = [
    {
      title:"La Conjura de los Necios",   
      author:"Richard Kevinston",
      id:0
    },
    {
      title:"El Quijote",
      author:"Miguel de Cervantes",
      id:1
    }

  ];

  return {
    books:hardCoredLib
  };

};

export default connect( mapStateToProps )( BookList );
