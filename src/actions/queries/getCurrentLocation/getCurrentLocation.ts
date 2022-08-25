import axios from 'axios';

import { config } from '../../../config/ipChecker';

export async function getCurrentLocation() {
  const response = await axios.get(`${config.baseUrl}/check`, {
    params: { access_key: config.apiKey },
  });

  return response.data;
}
