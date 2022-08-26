export interface IRawLocation {
  query: string;
  country: string;
  regionName: string;
  city: string;
  lat: number;
  lon: number;
  org: string;
}

export interface ILocation {
  ip: string;
  country: string;
  region: string;
  city: string;
  latitude: number;
  longitude: number;
  organization: string;
}
