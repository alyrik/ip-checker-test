import React, { FC } from 'react';
import { Description } from '../Description/Description';

interface IProps {
  ip: string;
  country: string;
  region: string;
  city: string;
  latitude: number;
  longitude: number;
  organization: string;
}

const prepareItems = (props: IProps) => [
  { name: 'IP Address', value: props.ip },
  { name: 'Latitude', value: props.latitude },
  { name: 'Longitude', value: props.longitude },
  { name: 'Country', value: props.country },
  { name: 'Region', value: props.region },
  { name: 'City', value: props.city },
  { name: 'Provider', value: props.organization },
];

export const LocationDescription: FC<IProps> = (props) => {
  const items = prepareItems(props);

  return (
    <Description
      items={items}
      fallbackText="Unfortunately, there's no any information about location."
    />
  );
};
