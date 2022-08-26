import { ILocation, IRawLocation } from '../models/location';

export const locationTransformer = (data: IRawLocation): ILocation => ({
  ip: data.query,
  country: data.country,
  region: data.regionName,
  city: data.city,
  latitude: data.lat,
  longitude: data.lon,
  organization: data.org,
});
