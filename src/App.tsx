import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

const Home = lazy(() => import('./pages/Home'))
const Napkin = lazy(() => import('./pages/Napkin'))
const Shortener = lazy(() => import('./pages/Shortener'))
const NapkinPage = lazy(() => import('./pages/NapkinPage'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading page...</h2>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/napkin" element={<Napkin />} />
            <Route path="/shortener" element={<Shortener />} />
            <Route path="/napkin/:code" element={<NapkinPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter >
  );
}

export default App;