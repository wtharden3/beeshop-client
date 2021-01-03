let APIURL = '';

switch (window.location.hostname) {
  case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:4040';
    break;

  case 'kws-beeshop-client.herokuapp.com':
    APIURL = 'https://kws-beeshop.herokuapp.com';
    break;

  default:
    APIURL = null;
}

export default APIURL;
