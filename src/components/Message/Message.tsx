import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  type: 'notification' | 'error';
}

const Message: FC<IProps> = ({ children, type = 'notification' }) => {
  return (
    <div className={`p-2 text-white ${type === 'error' ? 'bg-red-600' : ''}`}>
      {children}
    </div>
  );
};

export default Message;
