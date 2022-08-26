import React, { FC, ReactNode } from 'react';

interface IItem {
  name: string;
  value: ReactNode;
}

interface IProps {
  items: IItem[];
  fallbackText?: string;
}

export const Description: FC<IProps> = ({ items, fallbackText }) => {
  if (!items?.length) return fallbackText ? <span>{fallbackText}</span> : null;

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
