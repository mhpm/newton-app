import { IntroPage, WelcomePage, MainMenuPage } from 'pages';
import BiographyPage from 'pages/Biography/BiographyPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/main' element={<MainMenuPage />} />
        <Route path='/biography' element={<BiographyPage />} />
      </Routes>
    </div>
  );
}

export default App;
