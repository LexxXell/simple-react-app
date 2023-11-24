import { FC, useCallback, useState } from 'react';
import { IMyComponentProps } from '../@types';
import { register } from '../controllers';
import MyInput from './MyInput';
import MyButton from './MyButton';

import './MyRegisterForm.css';
import { registerValidate } from '../validators';

const MyRegisterForm: FC<IMyComponentProps> = ({}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmailHandle = useCallback((email: string) => {
    setEmail(email);
  }, []);

  const onChangeUsernameHandle = useCallback((username: string) => {
    setUsername(username);
  }, []);

  const onChangePasswordHandle = useCallback((password: string) => {
    setPassword(password);
  }, []);

  const onClickRegisterButtonHandle = useCallback(() => {
    const { isValid, message } = registerValidate(email, username, password);
    if (isValid) {
      try {
        register(email, username, password);
        setEmail('');
        setUsername('');
        setPassword('');
      } catch (e) {
        console.error(e);
      }
    } else {
      alert(`Validation error:\n${message}`);
    }
  }, [email, username, password]);

  return (
    <>
      <div className="label-container">
        <label>Email Address</label>
      </div>
      <MyInput
        name="email"
        placeholder="Enter your Email Address"
        className="input"
        value={email}
        onChange={onChangeEmailHandle}
      />
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
        className="input-bottom-register"
        value={password}
        onChange={onChangePasswordHandle}
      />
      <div className="button-container">
        <MyButton className="button" view="alt" onClick={onClickRegisterButtonHandle}>
          Register
        </MyButton>
      </div>
    </>
  );
};

export default MyRegisterForm;
