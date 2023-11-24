import { FC, useCallback, useState } from 'react';
import { IMyComponentProps } from '../@types';
import MyInput from './MyInput';
import MyButton from './MyButton';
import { login } from '../controllers';
import { loginValidate } from '../validators';

import './styles/MyLoginForm.css';

const MyLoginForm: FC<IMyComponentProps> = ({}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsernameHandle = useCallback((username: string) => {
    setUsername(username);
  }, []);

  const onChangePasswordHandle = useCallback((password: string) => {
    setPassword(password);
  }, []);

  const onClickLoginButtonHandle = useCallback(() => {
    const { isValid, message } = loginValidate(username, password);
    if (isValid) {
      try {
        login(username, password);
        setUsername('');
        setPassword('');
      } catch (e) {
        console.error(e);
      }
    } else {
      alert(`Validation error:\n${message}`);
    }
  }, [username, password]);

  return (
    <>
      <div className="label-container">
        <label>User name</label>
      </div>
      <MyInput
        name="username"
        placeholder="Enter your User name"
        className="input"
        value={username}
        onChange={onChangeUsernameHandle}
      />
      <div className="label-container">
        <label>Password</label>
      </div>
      <MyInput
        name="password"
        placeholder="Enter your Password"
        type="password"
        className="input-bottom-login"
        value={password}
        onChange={onChangePasswordHandle}
      />
      <div className="forgot-password-container">
        <a href="/restore-password">Forgot Password ?</a>
      </div>
      <div className="button-container">
        <MyButton className="button" onClick={onClickLoginButtonHandle}>
          Login
        </MyButton>
      </div>
    </>
  );
};

export default MyLoginForm;
