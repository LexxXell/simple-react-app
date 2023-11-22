import React, { useState } from 'react';
import './MyToggleSwitch.css';
import { IMyComponentProps } from '../@types';

interface IMyToggleSwitchProps extends IMyComponentProps {
  state0Text?: string;
  state1Text?: string;
  currentState?: string;
  onToggleChange?: (state: string) => {};
}

const MyToggleSwitch: React.FC<IMyToggleSwitchProps> = ({
  width,
  height,
  className,
  state0Text = 'State 0',
  state1Text = 'State 1',
  onToggleChange = console.log,
}) => {
  const [state, setState] = useState(0);

  const handleToggle = () => {
    setState((prevState) => (prevState === 0 ? 1 : 0));
    onToggleChange(state);
  };

  return (
    <div style={{ width, height }} className={`toggle-wrapper ${className}`} onClick={handleToggle}>
      <div className={`toggle-text ${state ? '' : 'active'}`}>{state0Text}</div>
      <div className={`toggle-text ${state ? 'active' : ''}`}>{state1Text}</div>
    </div>
  );
};

export default MyToggleSwitch;
