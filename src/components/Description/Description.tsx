import React, { FC, ReactNode } from 'react';

interface IItem {
  name: string;
  value: ReactNode;
}

interface IProps {
  items: IItem[];
}

export const Description: FC<IProps> = ({ items }) => {
  if (!items)
    return (
      <span>
        Unfortunately, there's no any information about your location.
      </span>
    );
  return (
    <dl>
      {items.map(({ name, value }) => (
        <div key={name} className="flex">
          <dt className="w-1/4 font-bold">{name}</dt>
          <dd className="w-3/4">{value}</dd>
        </div>
      ))}
    </dl>
  );
};
