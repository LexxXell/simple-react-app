import './App.css';
import MyButton from './components/MyButton';
import MyToggleSwitch from './components/MyToggleSwitch';

function App() {
  return (
    <>
      <MyToggleSwitch width="329px" height="59px" state0Text="Login" state1Text="Register" />
      <MyButton className="login-my-button">Login</MyButton>
    </>
  );
}

export default App;
