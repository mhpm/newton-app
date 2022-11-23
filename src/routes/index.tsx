import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import {
  IntroPage,
  WelcomePage,
  MainMenuPage,
  BiographyPage,
  FirstLawPage,
  SecondLawPage,
  ThirdLawPage,
  DiagramsPage,
} from 'pages';

// lazy imports
const LawsMenuPage = lazy(() => import('pages/Laws/LawsMenuPage'));

const RouteList = () => {
  return (
    <Suspense fallback={<h2 style={{ color: 'white' }}>Loading...</h2>}>
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
    </Suspense>
  );
};

export default RouteList;
