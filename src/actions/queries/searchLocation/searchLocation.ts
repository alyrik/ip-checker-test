import axios from 'axios';

import { config } from '../../../config/ipChecker';
import { LocationRequestError } from '../../../classes/LocationRequestError';
import { IRawLocation } from '../../../models/location';

export const searchLocation = async (
  searchTerm: string,
): Promise<IRawLocation> => {
  let response;

  try {
    response = await axios.get(`${config.baseUrl}/${searchTerm}`);
  } catch (e) {
    throw new LocationRequestError(
      LocationRequestError.ErrorType.General,
      'Network error',
    );
  }

  if (response.data.status !== 'success') {
    throw new LocationRequestError(
      LocationRequestError.ErrorType.NotFound,
      'Search was not successful',
    );
  }

  return response.data;
};
