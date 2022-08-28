import mockAxios from 'jest-mock-axios';
import { getCurrentLocation } from './getCurrentLocation';
import { config } from '../../../config/ipChecker';

describe('getCurrentLocation', () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  it('requests correct URL', async () => {
    mockAxios.get.mockResolvedValue({ data: { status: 'success' } });

    await getCurrentLocation();

    expect(mockAxios.get).toHaveBeenCalledWith(config.baseUrl);
  });

  it('returns data on success', async () => {
    const expectedData = { status: 'success', query: '111.111.111.111' };
    mockAxios.get.mockResolvedValue({ data: expectedData });

    const data = await getCurrentLocation();

    expect(data).toEqual(expectedData);
  });
});
