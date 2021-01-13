let APIURL = '';

switch (window.location.hostname) {
  case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:4040';
    break;

  case 'beeshop-client.herokuapp.com':
    APIURL = 'https://wth-beeshop-server.herokuapp.com';
    break;

  default:
    APIURL = null;
}

export default APIURL;
