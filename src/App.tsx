import './App.css';
import MyButton from './components/MyButton';
import MyInput from './components/MyInput';
import MyToggleSwitch from './components/MyToggleSwitch';

function App() {
  return (
    <>
      <MyToggleSwitch width="329px" height="59px" state0Text="Login" state1Text="Register" />
      <MyButton width="232px" height="49px" className="login-my-button">
        Login
      </MyButton>
      <MyInput width="435px" height="54px" placeholder="Input something common" />
      <MyInput width="435px" height="54px" placeholder="Input something secret" type="password" />
    </>
  );
}

export default App;
