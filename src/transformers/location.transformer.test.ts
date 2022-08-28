import { locationTransformer } from './location.transformer';

describe('locationTransformer', () => {
  it('returns transformed data', () => {
    const expectedData = {
      ip: 'ip',
      country: 'country',
      region: 'region',
      city: 'city',
      latitude: 123,
      longitude: 456,
      organization: 'organization',
    };

    const data = locationTransformer({
      query: 'ip',
      country: 'country',
      regionName: 'region',
      city: 'city',
      lat: 123,
      lon: 456,
      org: 'organization',
    });

    expect(data).toEqual(expectedData);
  });
});
