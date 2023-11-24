import MyCatImage from './components/MyCatImage';

import './App.css';
import MyAuthForm from './components/MyAuthForm';

function App() {
  return (
    <div className="container">
      <MyCatImage />
      <div className="auth-container">
        <MyAuthForm width="435px" />
      </div>
    </div>
  );
}

export default App;
