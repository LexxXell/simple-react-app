import React from 'react';
import './MyButton.css';
import { IMyComponentProps } from '../@types';

interface IMyButtonProps extends IMyComponentProps {
  view?: 'def' | 'alt';
  onClick?: () => void;
  children?: React.ReactNode;
}

const MyButton: React.FC<IMyButtonProps> = ({ width, height, className, onClick, children, view = '' }) => {
  const handleClick = () => onClick?.();

  return (
    <button className={`my-button ${className} ${view}`} style={{ width, height }} onClick={handleClick}>
      {children}
    </button>
  );
};

export default MyButton;
