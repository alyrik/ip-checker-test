import { ILocation, IRawLocation } from '../models/location';

export const locationTransformer = (data: IRawLocation): ILocation => ({
  ip: data.ip,
  country: data.country_name,
  countryFlag: data.location.country_flag_emoji,
  region: data.region_name,
  city: data.city,
  latitude: data.latitude,
  longitude: data.longitude,
});
