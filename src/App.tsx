import "./App.scss";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import { AllCats } from "./pages/AllCats/AllCats";
import { FavoriteCats } from "./pages/FavoriteCats/FavoriteCats";
import { Layout } from "./pages/Layout";

export const App: React.FC = () => {
  return (
    //Using HashRouter instead of BrowserRouter because it causes 404 error in github pages
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllCats />} />
          <Route path="favorite" element={<FavoriteCats />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
