import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import Separator from '../components/Separator';

class ResultsList extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.listings = navigation.getParam('listings', []);
  }

  onPressItem = index => {
    console.log(`Pressed row: ${index}`);
    const selectedProperty = this.listings[index];
    this.props.navigation.navigate('Detail', {
      selectedProperty
    });
  };

  separator = () => <Separator />;

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, index }) => (
    <ListItem item={item} onPressItem={() => this.onPressItem(index)} />
  );

  render() {
    return (
      <FlatList
        data={this.listings}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.separator}
      />
    );
  }
}

export default ResultsList;
