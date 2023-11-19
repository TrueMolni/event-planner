import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

const MainPage = lazy(() => import("./pages/MainPage"));
const SharedLayout = lazy(() => import("./components/SharedLayout"));

const App = () => (
  <BrowserRouter basename="event-planner">
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />}></Route>
          {/* <Route path="*" element={<p>Not found here</p>}></Route> */}
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
export default App;
