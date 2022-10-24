import {
  IntroPage,
  WelcomePage,
  MainMenuPage,
  BiographyPage,
  LawsMenuPage,
  FirstLawPage,
  SecondLawPage,
  ThirdLawPage,
  DiagramsPage,
} from 'pages';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/main' element={<MainMenuPage />} />
        <Route path='/biography' element={<BiographyPage />} />
        <Route path='/laws' element={<LawsMenuPage />} />
        <Route path='/first-law' element={<FirstLawPage />} />
        <Route path='/second-law' element={<SecondLawPage />} />
        <Route path='/third-law' element={<ThirdLawPage />} />
        <Route path='/diagrams' element={<DiagramsPage />} />
      </Routes>
    </div>
  );
};

export default App;
