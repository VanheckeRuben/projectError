import axios from 'axios';

const getUrlForSearchOnPlaceName = value => {
  const data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: 1,
    place_name: value
  };

  const querystring = Object.keys(data)
    .map(k => `${k}=${encodeURIComponent(data[k])}`)
    .join('&');

  return `http://api.nestoria.co.uk/api?${querystring}`;
};

export const fetch = async placeName => {
  const url = getUrlForSearchOnPlaceName(placeName);

  return axios.get(url).then(json => {
    console.log(json);
    return json.data.response;
  });
};
