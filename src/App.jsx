import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import { Footer } from "./Layout/Footer";
import Recipe from "./Layout/Recipe";
import { DefaultLayout } from "./Layout/DefaultLayout";
function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="*" element={<DefaultLayout />}>
        <Route index element={<Recipe />} />
        </Route>
        </Routes>
    </>
  );
}

export default App;
