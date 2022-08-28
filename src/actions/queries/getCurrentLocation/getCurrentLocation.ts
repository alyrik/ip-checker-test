import axios from 'axios';

import { config } from '../../../config/ipChecker';

const url = config.baseUrl;

export async function getCurrentLocation() {
  const response = await axios.get(url);

  return response.data;
}
