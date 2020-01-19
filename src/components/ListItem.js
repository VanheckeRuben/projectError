import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';
import theme from '../styles/theme';

class ListItem extends Component {
  onPress = () => {
    this.props.onPressItem();
  };

  render() {
    const { img_url, price_formatted: priceFormatted, title } = this.props.item;
    const { rowContainer, thumb, textContainer, price, subtitle } = styles;

    return (
      <TouchableHighlight onPress={this.onPress} underlayColor="#dddddd">
        <View>
          <View style={rowContainer}>
            <Image style={thumb} source={{ uri: img_url }} />
            <View style={textContainer}>
              <Text style={price}>{priceFormatted}</Text>
              <Text style={subtitle} numberOfLines={1}>
                {title}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  price: {
    fontSize: theme.FONT_SIZE_XLARGE,
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR
  },
  subtitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.FONT_COLOR
  }
});

export default ListItem;
