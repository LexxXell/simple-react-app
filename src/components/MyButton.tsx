import React, { useState } from 'react';
import './MyButton.css';
import { IMyComponentProps } from '../@types';

interface IMyButtonProps extends IMyComponentProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const MyButton: React.FC<IMyButtonProps> = ({ width, height, className, onClick, children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    if (onClick) {
      onClick();
    }

    setIsClicked(false);
  };

  return (
    <button
      className={`my-button ${className} ${isClicked ? 'clicked' : ''}`}
      style={{ width, height }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default MyButton;
