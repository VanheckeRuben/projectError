import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import VimmoButton from '../components/VimmoButton';
import theme from '../styles/theme';
import Seperator from '../components/Separator';

class Detail extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.property = navigation.getParam('selectedProperty');
  }

  openUrl(url) {
    Linking.openURL(url).catch(err =>
      console.error('Fout bij openen url', err)
    );
  }

  render() {
    const {
      container,
      image,
      subContainer,
      price,
      iconsContainer,
      iconText,
      description,
      bottom
    } = styles;

    const {
      img_url,
      price_formatted: priceFormatted,
      title,
      bedroom_number: bedroomNumber,
      bathroom_number: bathroomNumber,
      summary,
      lister_url
    } = this.property;

    return (
      <View style={container}>
        <Image style={image} source={{ uri: img_url }} resizeMode="cover" />
        <View style={subContainer}>
          <Text style={price}>{priceFormatted}</Text>
          <Text style={[description, { fontSize: theme.FONT_SIZE_LARGE }]}>
            {title}
          </Text>
          <Seperator />
          <View style={iconsContainer}>
            <Text style={iconText}>{bedroomNumber || 0}</Text>
            <FontAwesome name="bed" size={32} color={theme.PRIMARY_COLOR} />
            <Text style={iconText}>{bathroomNumber || 0}</Text>
            <FontAwesome name="bath" size={32} color={theme.PRIMARY_COLOR} />
          </View>
          <Text style={description}>{summary}</Text>
        </View>
        <View style={bottom}>
          <VimmoButton
            onPressed={this.openUrl.bind(this, lister_url)}
            height={60}
          >
            Bekijk details van woning
          </VimmoButton>
          {/*
          or
            <VimmoButton onPressed={() => this.openUrl(lister_url)} height={60}>
              Bekijk details van woning
            </VimmoButton>
          */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  iconsContainer: {
    flexDirection: 'row'
  },
  image: {
    height: 300
  },
  subContainer: {
    padding: 20
  },
  price: {
    fontSize: theme.FONT_SIZE_XLARGE,
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR,
    marginBottom: 5
  },
  iconText: {
    fontSize: theme.FONT_SIZE_LARGE,
    margin: 10,
    color: theme.PRIMARY_COLOR
  },
  description: {
    fontSize: theme.FONT_SIZE,
    color: theme.FONT_COLOR,
    marginTop: 5
  },
  bottom: { flex: 1, justifyContent: 'flex-end' }
});

export default Detail;
