import React, { FC } from 'react';
import { Description } from '../Description/Description';

interface IProps {
  ip: string;
  country: string;
  countryFlag: string;
  region: string;
  city: string;
  latitude: number;
  longitude: number;
}

const prepareItems = (props: IProps) => [
  { name: 'IP Address', value: props.ip },
  { name: 'Latitude', value: props.latitude },
  { name: 'Longitude', value: props.longitude },
  {
    name: 'Country',
    value: (
      <span>
        {props.country} {props.countryFlag}
      </span>
    ),
  },
  { name: 'Region', value: props.region },
  { name: 'City', value: props.city },
];

export const LocationDescription: FC<IProps> = (props) => {
  const items = prepareItems(props);

  return <Description items={items} />;
};
