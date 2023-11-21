import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';

import './App.css';

const MainPage = lazy(() => import('./pages/MainPage'));
const AddEventPage = lazy(() => import('./pages/AddEventPage'));

const App = () => (
  <BrowserRouter basename="event-planner">
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/add-event" element={<AddEventPage />} />
          {/* <Route path="*" element={<p>Not found here</p>}></Route> */}
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
export default App;
