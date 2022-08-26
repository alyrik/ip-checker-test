import axios from 'axios';

import { config } from '../../../config/ipChecker';
import { QueryKey } from '../index';

type Params = {
  queryKey: [QueryKey, string];
};

export async function searchLocation({ queryKey: [_, searchTerm] }: Params) {
  const response = await axios.get(`${config.baseUrl}/${searchTerm}`);

  if (response.data.status !== 'success') {
    throw new Error(response.data.error);
  }

  return response.data;
}
