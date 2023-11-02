import "./custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import TVShows from "./components/TVShows";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="tv-shows" element={<TVShows />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
