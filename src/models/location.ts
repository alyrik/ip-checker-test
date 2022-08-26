export interface IRawLocation {
  ip: string;
  country_name: string;
  region_name: string;
  city: string;
  latitude: number;
  longitude: number;
  location: {
    country_flag_emoji: string;
  };
}

export interface ILocation {
  ip: string;
  country: string;
  countryFlag: string;
  region: string;
  city: string;
  latitude: number;
  longitude: number;
}
