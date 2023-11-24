import React, { useCallback, useEffect, useState } from 'react';
import { IMyComponentProps } from '../@types';

import './styles/MyToggleSwitch.css';

interface IMyToggleSwitchProps extends IMyComponentProps {
  state0Text?: string;
  state1Text?: string;
  state?: string;
  onToggleChange?: (state: 0 | 1) => void;
}

const MyToggleSwitch: React.FC<IMyToggleSwitchProps> = ({
  width,
  height,
  className,
  state0Text = 'State 0',
  state1Text = 'State 1',
  state: externalState,
  onToggleChange,
}) => {
  const [state, setState] = useState(Number(externalState || 0));

  const handleToggle = useCallback(() => {
    const nextState = state === 0 ? 1 : 0;
    setState(nextState);
    onToggleChange?.(nextState as 0 | 1);
  }, [state, onToggleChange]);

  useEffect(() => {
    setState(Number(externalState || 0));
  }, [externalState]);

  return (
    <div style={{ width, height }} className={`toggle-wrapper ${className}`} onClick={handleToggle}>
      <div className={`toggle-text ${state === 0 ? 'active' : ''}`}>{state0Text}</div>
      <div className={`toggle-text ${state === 1 ? 'active' : ''}`}>{state1Text}</div>
    </div>
  );
};

export default MyToggleSwitch;
