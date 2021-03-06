import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Video360 from "./pages/Video360";
import AllRoutes from "./pages/AllRoutes";
import RouteDetail from "./pages/RouteDetail";
import Home from "./pages/Home";

import ShowRSSFile from "./components/ShowRSSFile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/route-detail/:id" element={<RouteDetail />} />
        <Route path="/all-routes" element={<AllRoutes />} />
        <Route path="/video-360/:route/:stop" element={<Video360 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rss-file" element={<ShowRSSFile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
