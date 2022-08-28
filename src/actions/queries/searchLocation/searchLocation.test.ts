import mockAxios from 'jest-mock-axios';
import { searchLocation } from './searchLocation';
import { config } from '../../../config/ipChecker';
import { LocationRequestError } from '../../../classes/LocationRequestError';

const searchTerm = 'searchTermTest';

describe('searchLocation', () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  it('requests correct URL', async () => {
    mockAxios.get.mockResolvedValue({ data: { status: 'success' } });

    await searchLocation(searchTerm);

    expect(mockAxios.get).toHaveBeenCalledWith(
      `${config.baseUrl}/${searchTerm}`,
    );
  });

  it('returns data on success', async () => {
    const expectedData = { status: 'success', query: '111.111.111.111' };
    mockAxios.get.mockResolvedValue({ data: expectedData });

    const data = await searchLocation(searchTerm);

    expect(data).toEqual(expectedData);
  });

  it('rejects with General error on network or server error', async () => {
    mockAxios.get.mockRejectedValue({});
    let error = {} as LocationRequestError;

    try {
      await searchLocation(searchTerm);
    } catch (e: any) {
      error = e;
    }

    expect(error.type).toBe(LocationRequestError.ErrorType.General);
  });

  it('rejects with NotFound error on empty result', async () => {
    mockAxios.get.mockResolvedValue({ data: { status: 'fail' } });
    let error = {} as LocationRequestError;

    try {
      await searchLocation(searchTerm);
    } catch (e: any) {
      error = e;
    }

    expect(error.type).toBe(LocationRequestError.ErrorType.NotFound);
  });
});
