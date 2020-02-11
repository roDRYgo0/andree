import axios from 'axios';

export default {
  setBaseURL(url) {
    axios.defaults.baseURL = url;
  },
};
