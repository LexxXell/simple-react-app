import { FC, useCallback, useState } from 'react';
import './MyAuthForm.css';
import { IMyComponentProps } from '../@types';
import MyToggleSwitch from './MyToggleSwitch';
import MyLoginForm from './MyLoginForm';
import MyRegisterForm from './MyRegisterForm';

interface IMyAuthForm extends IMyComponentProps {}

const MyAuthForm: FC<IMyAuthForm> = ({ width, height, className }) => {
  const [isRegister, setIsRegister] = useState(false);

  const switchHandle = useCallback((state: 0 | 1) => {
    setIsRegister(Boolean(state));
  }, []);

  return (
    <div style={{ width, height }} className={`auth-form-container ${className}`}>
      <h4 className="header-container">Welcome to lorem..!</h4>
      <div className="toggle-container">
        <MyToggleSwitch state0Text="Login" state1Text="Register" className="toggle" onToggleChange={switchHandle} />
      </div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      {isRegister ? <MyRegisterForm /> : <MyLoginForm />}
    </div>
  );
};

export default MyAuthForm;
