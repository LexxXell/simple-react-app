import React from 'react';
import './MyButton.css';
import { IMyComponentProps } from '../@types';

interface IMyButtonProps extends IMyComponentProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const MyButton: React.FC<IMyButtonProps> = ({ width, height, className, onClick, children }) => {
  const handleClick = () => onClick?.();

  return (
    <button className={`my-button ${className}`} style={{ width, height }} onClick={handleClick}>
      {children}
    </button>
  );
};

export default MyButton;
