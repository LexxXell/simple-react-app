import './App.css';
import MyButton from './components/MyButton';
import MyInput from './components/MyInput';
import MyToggleSwitch from './components/MyToggleSwitch';

function App() {
  return (
    <>
      <MyToggleSwitch width="329px" height="59px" state0Text="Login" state1Text="Register" />
      <MyButton width="232" height="49" className="login-my-button">
        Login
      </MyButton>
      <MyInput placeholder="Input something common" />
      <MyInput placeholder="Input something secret" type="password" />
    </>
  );
}

export default App;
