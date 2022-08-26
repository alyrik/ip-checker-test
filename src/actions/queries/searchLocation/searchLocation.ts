import axios from 'axios';

import { config } from '../../../config/ipChecker';
import { QueryKey } from '../index';

type Params = {
  queryKey: [QueryKey, string];
};

export async function searchLocation({ queryKey: [_, searchTerm] }: Params) {
  const response = await axios.get(`${config.baseUrl}/${searchTerm}`, {
    params: { access_key: config.apiKey },
  });

  return response.data;
}
