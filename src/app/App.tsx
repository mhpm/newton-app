import { IntroPage, WelcomePage } from 'pages';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='/welcome' element={<WelcomePage />} />
      </Routes>
    </div>
  );
}

export default App;
