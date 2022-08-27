import React, { FC } from 'react';

interface Props {
  text: string;
  type: 'notification' | 'error';
}

const Message: FC<Props> = ({ text, type = 'notification' }) => {
  return (
    <div className={`p-2 text${type === 'error' ? 'bg-red-600' : ''}`}>
      {text}
    </div>
  );
};

export default Message;
